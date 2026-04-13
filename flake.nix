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
      devShells.${system} = {
        backend = pkgs.mkShell {
          packages = [
            pkgs.bun
            pkgs.nodejs_22
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
