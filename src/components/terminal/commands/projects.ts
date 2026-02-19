import type { TerminalLine } from "../Terminal";

export default function projects(): TerminalLine[] {
  return [
    { id: 0, type: "output", content: "CyberTools Suite      - Suite d’outils cyber premium" },
    { id: 1, type: "output", content: "Dashboard Terminal    - Terminal web interactif" },
    { id: 2, type: "output", content: "CyberScan PRO         - Scanner avancé (v2)" },
  ];
}
