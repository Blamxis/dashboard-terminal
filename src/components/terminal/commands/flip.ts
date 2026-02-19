import type { TerminalLine } from "../Terminal";

export default function flip(): TerminalLine[] {
  const result = Math.random() < 0.5 ? "Pile" : "Face";

  return [
    {
      id: 0,
      type: "output",
      content: `🪙 ${result}`,
    },
  ];
}
