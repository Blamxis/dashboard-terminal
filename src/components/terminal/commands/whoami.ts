import type { TerminalLine } from "../Terminal";
import type { CommandContext } from "./index";

export default function whoami(args: string[], ctx: CommandContext): TerminalLine[] {
  return [
    {
      id: 0,
      type: "output",
      content: `Utilisateur actuel : ${ctx.username}`,
    },
  ];
}
