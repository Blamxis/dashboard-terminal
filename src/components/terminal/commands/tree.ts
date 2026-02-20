import type { TerminalLine } from "../Terminal";
import { fileSystem, type FileNode } from "../filesystem";

function renderTree(node: FileNode, prefix = ""): string {
  if (node.type === "file") return "";

  let output = "";
  const entries = Object.entries(node.children || {}) as [string, FileNode][];

  entries.forEach(([name, child], index) => {
    const isLast = index === entries.length - 1;
    const branch = isLast ? "└── " : "├── ";
    output += prefix + branch + name + "\n";

    if (child.type === "directory") {
      const newPrefix = prefix + (isLast ? "    " : "│   ");
      output += renderTree(child, newPrefix);
    }
  });

  return output;
}

export default function tree(): TerminalLine[] {
  return [
    {
      id: 0,
      type: "output",
      content: renderTree(fileSystem),
    },
  ];
}
