import type { TerminalLine } from "../Terminal";

export default function clear(): TerminalLine[] {
  return [
    {
      id: 0,
      type: "system",
      content: "__clear__", // signal interne
    },
  ];
}
