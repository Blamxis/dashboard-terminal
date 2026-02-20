import type { TerminalLine } from "../Terminal";

export default function ping(): TerminalLine[] {
  return [
    {
      id: 0,
      type: "output",
      content: "pong",
    },
  ];
}
