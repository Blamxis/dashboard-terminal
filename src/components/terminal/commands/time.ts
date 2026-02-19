import type { TerminalLine } from "../Terminal";

export default function time(): TerminalLine[] {
  return [
    {
      id: 0,
      type: "output",
      content: new Date().toLocaleTimeString("fr-FR"),
    },
  ];
}
