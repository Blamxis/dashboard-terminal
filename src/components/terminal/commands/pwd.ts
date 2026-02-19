import type { TerminalLine } from "../Terminal";
import type { CommandContext } from "./index";

export default function pwd(args: string[], ctx: CommandContext): TerminalLine[] {
  return [
    {
      id: 0,
      type: "output",
      content: "/" + ctx.currentPath.join("/"),
    },
  ];
}
