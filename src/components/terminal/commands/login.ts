import type { TerminalLine } from "../Terminal";
import type { CommandContext } from "./index";

export default function login(args: string[], ctx: CommandContext): TerminalLine[] {
  if (args.length === 0) {
    return [
      {
        id: 0,
        type: "output",
        content: "Usage: login <nom>",
      },
    ];
  }

  const name = args.join(" ");
  ctx.setUsername(name);

  return [
    {
      id: 0,
      type: "output",
      content: `Connecté en tant que ${name}`,
    },
  ];
}
