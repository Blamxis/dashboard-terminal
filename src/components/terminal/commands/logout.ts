import type { TerminalLine } from "../Terminal";
import type { CommandContext } from "./index";

export default function logout(args: string[], ctx: CommandContext): TerminalLine[] {
  ctx.setUsername("Invité");

  return [
    {
      id: 0,
      type: "output",
      content: "Déconnecté. Utilisateur = Invité",
    },
  ];
}
