{
  description = "Bun Dev Environment";

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
          bun
          nodejs_22
          typescript
          nodePackages.typescript-language-server
          vscode-langservers-extracted # CSS, HTML, JSON, MD
        ];

        shellHook = ''
          if [ -f "package.json" ]; then
            bun install
          fi
          export PATH="$PWD/node_modules/.bin:$PATH"
          echo "Bun Development Environment Active"
        '';
      };
    };
}
