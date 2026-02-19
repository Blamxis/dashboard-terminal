import type { TerminalLine } from "../Terminal";

export default function random(): TerminalLine[] {
  return [
    {
      id: 0,
      type: "output",
      content: Math.floor(Math.random() * 100).toString(),
    },
  ];
}
