"use client";

import { useState } from "react";
import TerminalHeader from "./TerminalHeader";
import TerminalScreen from "./TerminalScreen";
import TerminalInput from "./TerminalInput";

export type TerminalLine = {
  id: number;
  type: "input" | "output" | "system";
  content: string;
};

export default function Terminal() {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 1,
      type: "system",
      content:
        "Bienvenue dans le Dashboard Terminal. Tapez `help` pour voir les commandes disponibles.",
    },
  ]);

  const appendLine = (line: Omit<TerminalLine, "id">) => {
    setHistory((prev) => [...prev, { ...line, id: prev.length + 1 }]);
  };

  const handleCommand = (command: string) => {
    const trimmed = command.trim();
    if (!trimmed) return;

    appendLine({
      type: "input",
      content: `user@terminal ~$ ${trimmed}`,
    });

    switch (trimmed) {
      case "help":
        appendLine({
          type: "output",
          content: "Commandes disponibles: help, clear, whoami, about",
        });
        break;

      case "whoami":
        appendLine({
          type: "output",
          content: "Utilisateur: Maxime — créateur du Dashboard Terminal.",
        });
        break;

      case "about":
        appendLine({
          type: "output",
          content:
            "Dashboard Terminal v1.0 — interface terminal premium en Next.js + Tailwind.",
        });
        break;

      case "clear":
        setHistory([]);
        appendLine({
          type: "system",
          content: "Terminal nettoyé. Tapez `help` pour voir les commandes.",
        });
        break;

      default:
        appendLine({
          type: "output",
          content: `Commande inconnue: ${trimmed}. Tapez \`help\` pour voir les commandes.`,
        });
        break;
    }
  };

  return (
    <div
      className="
      max-w-4xl mx-auto mt-10
      bg-black/80 border border-green-500/40 rounded-lg
      shadow-[0_0_25px_rgba(34,197,94,0.35)]
      backdrop-blur-sm
      overflow-hidden
    "
    >
      <TerminalHeader />
      <TerminalScreen history={history} />
      <TerminalInput onSubmitCommand={handleCommand} />
    </div>
  );
}
