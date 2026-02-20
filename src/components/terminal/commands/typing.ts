import type { TerminalLine } from "../Terminal";
import type { CommandContext } from "./index";

export default function typing(args: string[], ctx: CommandContext): TerminalLine[] {
  if (args.length === 0) {
    return [
      {
        id: 0,
        type: "output",
        content: "Usage: typing <texte>",
      },
    ];
  }

  const text = args.join(" ");

  return [
    {
      id: 0,
      type: "animation",
      content: `typing:${text}`,
    },
  ];
}
