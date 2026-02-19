import type { TerminalLine } from "../Terminal";

export default function date(): TerminalLine[] {
  return [
    {
      id: 0,
      type: "output",
      content: new Date().toLocaleDateString("fr-FR"),
    },
  ];
}
