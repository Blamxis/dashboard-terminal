import type { TerminalLine } from "../Terminal";
import type { CommandContext } from "./index";
import { fileSystem, type FileNode } from "../filesystem";

function getNode(path: string[]): FileNode | null {
  let node: FileNode | undefined = fileSystem;
  for (const part of path) {
    node = node.children?.[part];
    if (!node) return null;
  }
  return node;
}

export default function ls(args: string[], ctx: CommandContext): TerminalLine[] {
  const node = getNode(ctx.currentPath);

  if (!node || node.type !== "directory") {
    return [
      { id: 0, type: "output", content: "Erreur: dossier introuvable." }
    ];
  }

  const items = Object.keys(node.children || {});

  return [
    {
      id: 0,
      type: "output",
      content: items.join("  "),
    },
  ];
}
