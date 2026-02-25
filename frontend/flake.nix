{
  description = "My Astro website";

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
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs_22
          nodePackages.pnpm
          typescript
          astro-language-server
          nodePackages.typescript-language-server
          vscode-langservers-extracted # CSS, HTML, JSON, MD
        ];

        shellHook = ''
          if [ -f "package.json" ]; then
            pnpm install
          fi
          export PATH="$PWD/node_modules/.bin:$PATH"
          echo "Astro Development Environment Active"
        '';
      };
    };
}
