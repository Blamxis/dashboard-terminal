import type { TerminalLine } from "../Terminal";
import type { CommandContext } from "./index";

export default function loading(args: string[], ctx: CommandContext): TerminalLine[] {
  return [
    {
      id: 0,
      type: "animation",
      content: "loading",
    },
  ];
}
