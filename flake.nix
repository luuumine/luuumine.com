{
  description = "luuumine.com flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs =
    { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      packages.${system} = {
        frontend = pkgs.stdenv.mkDerivation {
          pname = "luuumine-frontend";
          version = "3.5.0";
          src = ./frontend;

          nativeBuildInputs = [
            pkgs.nodejs_22
            pkgs.pnpmConfigHook
            pkgs.pnpm
          ];

          pnpmDeps = pkgs.fetchPnpmDeps {
            inherit (self.packages.${system}.frontend) pname version src;
            fetcherVersion = 3;
            hash = "sha256-I+KJgI5ab+iitxP418+HV0Ki07AeE+TBNzpf/szJ/N8=";
          };

          buildPhase = "pnpm build";
          installPhase = "cp -r dist $out";
        };

        backend = pkgs.stdenv.mkDerivation {
          pname = "luuumine-backend";
          version = "1.0.0";
          src = ./backend;

          nativeBuildInputs = [
            pkgs.nodejs_22
            pkgs.pnpmConfigHook
            pkgs.pnpm
          ];

          pnpmDeps = pkgs.fetchPnpmDeps {
            inherit (self.packages.${system}.backend) pname version src;
            fetcherVersion = 3;
            hash = "sha256-dMzr5LUT8c85kgncKSTmNU9ZHt3CG0ngEZtYIjv9AHI=";
          };

          installPhase = ''
            mkdir -p $out
            cp -r . $out/
            mkdir -p $out/bin

            cat <<EOF > $out/bin/luuumine-api
            #!/bin/sh
            cd $out
            exec ${pkgs.tsx}/bin/tsx src/index.ts "\$@"
            EOF

            chmod +x $out/bin/luuumine-api
          '';
        };
      };

      nixosModules.default =
        {
          config,
          lib,
          pkgs,
          ...
        }:
        let
          cfg = config.services.luuumine-backend;
          backendPkg = self.packages.${pkgs.stdenv.hostPlatform.system}.backend;
        in
        {
          options.services.luuumine-backend = {
            enable = lib.mkEnableOption "luuumine.com backend service";
            port = lib.mkOption {
              type = lib.types.port;
              default = 3000;
            };
            envFile = lib.mkOption {
              type = lib.types.path;
              description = "path to env file";
            };
          };

          config = lib.mkIf cfg.enable {
            systemd.services.luuumine-com-backend = {
              description = "luuumine.com api";
              after = [ "network.target" ];
              wantedBy = [ "multi-user.target" ];
              serviceConfig = {
                DynamicUser = true;
                Environment = "PORT=${toString cfg.port}";
                EnvironmentFile = cfg.envFile;
                ExecStart = "${backendPkg}/bin/luuumine-api";
                Restart = "always";
              };
            };
          };
        };

      devShells.${system} = {
        backend = pkgs.mkShell {
          packages = [
            pkgs.nodejs_22
            pkgs.pnpm
            pkgs.typescript
            pkgs.typescript-language-server
            pkgs.vscode-langservers-extracted
          ];
          shellHook = ''
            export PATH="$PWD/node_modules/.bin:$PATH"
            echo "backend development environment active"
          '';
        };
        frontend = pkgs.mkShell {
          packages = [
            pkgs.astro-language-server
            pkgs.nodejs_22
            pkgs.pnpm
            pkgs.typescript
            pkgs.typescript-language-server
            pkgs.vscode-langservers-extracted
          ];
          shellHook = ''
            export PATH="$PWD/node_modules/.bin:$PATH"
            echo "frontend development environment active"
          '';
        };
      };
    };
}
