{ pkgs ? import <nixpkgs> { } }:
with pkgs;
mkShell {
  buildInputs = [
    nodejs
  ];

  shellHook = ''
    npm run watch &
  '';
}
