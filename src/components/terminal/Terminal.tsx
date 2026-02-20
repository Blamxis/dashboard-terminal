"use client";

import { useState } from "react";
import TerminalHeader from "./TerminalHeader";
import TerminalScreen from "./TerminalScreen";
import TerminalInput from "./TerminalInput";
import runCommand from "./commands";

import { runTypewriterEffect } from "../effects/Typewriter";
import { runLoadingEffect } from "../effects/Loading";
import { runGlitchEffect } from "../effects/Glitch";
import { runMatrixEffect } from "../effects/Matrix";

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
  const [currentPath, setCurrentPath] = useState<string[]>(["home", "Maxime"]);

  const appendLine = (line: Omit<TerminalLine, "id">) => {
    setHistory((prev) => [...prev, { ...line, id: prev.length + 1 }]);
  };

  // --- SCAN ANIMATION ---
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

    for (const step of steps) {
      appendLine({ type: "output", content: step });
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  };

  // --- ANIMATION DISPATCHER ---
  const runAnimation = async (content: string) => {
    if (content.startsWith("typing:")) {
      const text = content.replace("typing:", "");
      await runTypewriterEffect(text, (line) =>
        appendLine({ type: "output", content: line.content })
      );
      return;
    }

    if (content === "loading") {
      await runLoadingEffect((line) =>
        appendLine({ type: "output", content: line.content })
      );
      return;
    }

    if (content.startsWith("glitch:")) {
      const text = content.replace("glitch:", "");
      await runGlitchEffect(text, (line) =>
        appendLine({ type: "output", content: line.content })
      );
      return;
    }

    if (content === "matrix") {
      await runMatrixEffect((line) =>
        appendLine({ type: "output", content: line.content })
      );
      return;
    }

    if (content === "scan") {
      await runScanAnimation();
      return;
    }
  };

  const handleCommand = (command: string) => {
    const trimmed = command.trim();
    if (!trimmed) return;

    appendLine({
      type: "input",
      content: `${username}@terminal:/${currentPath.join("/")} $ ${trimmed}`,
    });

    const results = runCommand(trimmed, {
      username,
      setUsername,
      currentPath,
      setCurrentPath,
    });

    results.forEach((line) => {
      if (line.content === "__clear__") {
        setHistory([]);
        appendLine({
          type: "system",
          content: "Terminal nettoyé. Tapez `help` pour voir les commandes.",
        });
        return;
      }

      if (line.type === "animation") {
        runAnimation(line.content);
        return;
      }

      appendLine({
        type: line.type,
        content: line.content,
      });
    });
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
