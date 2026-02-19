import type { TerminalLine } from "../Terminal";

export default function about(): TerminalLine[] {
  return [
    {
      id: 0,
      type: "output",
      content: "Dashboard Terminal v1.0 — interface terminal premium en Next.js + Tailwind.",
    },
  ];
}
