import type { TerminalLine } from "../Terminal";
import type { CommandContext } from "./index";

export default function history(args: string[], ctx: CommandContext): TerminalLine[] {
  return [
    {
      id: 0,
      type: "output",
      content: "L’historique n’est pas encore implémenté (prévu Feature 5).",
    },
  ];
}
