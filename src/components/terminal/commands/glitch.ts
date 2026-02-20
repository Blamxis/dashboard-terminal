import type { TerminalLine } from "../Terminal";
import type { CommandContext } from "./index";

export default function glitch(args: string[], ctx: CommandContext): TerminalLine[] {
  if (args.length === 0) {
    return [
      { id: 0, type: "output", content: "Usage: glitch <texte>" }
    ];
  }

  const text = args.join(" ");

  return [
    {
      id: 0,
      type: "animation",
      content: `glitch:${text}`,
    },
  ];
}
