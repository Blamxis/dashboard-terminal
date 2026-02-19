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

export default function cd(args: string[], ctx: CommandContext): TerminalLine[] {
  if (args.length === 0) {
    return [{ id: 0, type: "output", content: "Usage: cd <dossier>" }];
  }

  const target = args[0];

  // cd ..
  if (target === "..") {
    if (ctx.currentPath.length > 0) {
      ctx.setCurrentPath(ctx.currentPath.slice(0, -1));
    }
    return [];
  }

  const newPath = [...ctx.currentPath, target];
  const node = getNode(newPath);

  if (!node || node.type !== "directory") {
    return [
      { id: 0, type: "output", content: `cd: dossier introuvable: ${target}` }
    ];
  }

  ctx.setCurrentPath(newPath);
  return [];
}
