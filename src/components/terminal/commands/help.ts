import type { TerminalLine } from "../Terminal";
import { commands } from "./index";

export default function help(): TerminalLine[] {
  const lines = Object.entries(commands).map(([name, def]) => {
    return `${name.padEnd(10)} - ${def.description}`;
  });

  return [
    {
      id: 0,
      type: "output",
      content: [
        "Commandes disponibles :",
        "",
        ...lines
      ].join("\n"),
    },
  ];
}
