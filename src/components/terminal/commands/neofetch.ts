import type { TerminalLine } from "../Terminal";
import type { CommandContext } from "./index";

export default function neofetch(args: string[], ctx: CommandContext): TerminalLine[] {
  const ascii = `
███╗   ██╗███████╗ ██████╗ ███████╗███████╗████████╗
████╗  ██║██╔════╝██╔════╝ ██╔════╝██╔════╝╚══██╔══╝
██╔██╗ ██║█████╗  ██║  ███╗█████╗  ███████╗   ██║   
██║╚██╗██║██╔══╝  ██║   ██║██╔══╝  ╚════██║   ██║   
██║ ╚████║███████╗╚██████╔╝███████╗███████║   ██║   
╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚══════╝╚══════╝   ╚═╝   
  `.trim();

  return [
    { id: 0, type: "output", content: ascii },
    { id: 1, type: "output", content: "" },
    { id: 2, type: "output", content: `Utilisateur : ${ctx.username}` },
    { id: 3, type: "output", content: `OS         : Dashboard Terminal OS` },
    { id: 4, type: "output", content: `Version    : 1.0.0` },
    { id: 5, type: "output", content: `Browser    : ${navigator.userAgent}` },
  ];
}
