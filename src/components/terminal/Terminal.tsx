"use client";

import { useState } from "react";
import TerminalHeader from "./TerminalHeader";
import TerminalScreen from "./TerminalScreen";
import TerminalInput from "./TerminalInput";
import runCommand from "./commands";

export type TerminalLine = {
  id: number;
  type: "input" | "output" | "system" | "animation";
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

  const [username, setUsername] = useState("Invité");

  const appendLine = (line: Omit<TerminalLine, "id">) => {
    setHistory((prev) => [...prev, { ...line, id: prev.length + 1 }]);
  };

  const handleCommand = (command: string) => {
    const trimmed = command.trim();
    if (!trimmed) return;

    appendLine({
      type: "input",
      content: `${username}@terminal ~$ ${trimmed}`,
    });

    const results = runCommand(trimmed, { username, setUsername });

    results.forEach((line) => {
      // CLEAR
      if (line.content === "__clear__") {
        setHistory([]);
        appendLine({
          type: "system",
          content: "Terminal nettoyé. Tapez `help` pour voir les commandes.",
        });
        return;
      }

      // ANIMATION
      if (line.type === "animation" && line.content === "scan") {
        runScanAnimation();
        return;
      }

      // Lignes normales
      appendLine({
        type: line.type,
        content: line.content,
      });
    });
  };

  const runScanAnimation = async () => {
    const steps = [
      "[ SCAN INITIALISÉ ]",
      "[##................] 10%",
      "[#####.............] 25%",
      "[##########........] 45%",
      "[##############....] 70%",
      "[##################] 100%",
      "Scan terminé : aucune menace détectée.",
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      appendLine({
        type: "output",
        content: steps[i],
      });
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
