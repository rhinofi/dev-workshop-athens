let
  pkgs = import ./nix/pkgs.nix {};
in
  pkgs.mkShell {
    inputsFrom = with pkgs; [
        dev-shell-with-node-yarn-berry-4-ts-minimal
      ]
    ;
    packages = with pkgs; [
      watchexec
    ];
  }
