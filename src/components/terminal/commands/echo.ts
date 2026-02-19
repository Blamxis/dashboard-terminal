import type { TerminalLine } from "../Terminal";

export default function echo(args: string[]): TerminalLine[] {
  return [
    {
      id: 0,
      type: "output",
      content: args.join(" "),
    },
  ];
}
