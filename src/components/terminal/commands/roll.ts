import type { TerminalLine } from "../Terminal";

export default function roll(): TerminalLine[] {
  const value = Math.floor(Math.random() * 6) + 1;

  return [
    {
      id: 0,
      type: "output",
      content: `🎲 Résultat du dé : ${value}`,
    },
  ];
}
