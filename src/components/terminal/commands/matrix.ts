import type { TerminalLine } from "../Terminal";
import type { CommandContext } from "./index";

export default function matrix(args: string[], ctx: CommandContext): TerminalLine[] {
  return [
    {
      id: 0,
      type: "animation",
      content: "matrix",
    },
  ];
}
