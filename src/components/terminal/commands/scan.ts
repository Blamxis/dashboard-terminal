import type { TerminalLine } from "../Terminal";

export default function scan(): TerminalLine[] {
  return [
    {
      id: 0,
      type: "animation",
      content: "scan",
    },
  ];
}
