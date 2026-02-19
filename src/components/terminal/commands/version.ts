import type { TerminalLine } from "../Terminal";

export default function version(): TerminalLine[] {
  return [
    {
      id: 0,
      type: "output",
      content: "Dashboard Terminal v1.0.0",
    },
  ];
}
