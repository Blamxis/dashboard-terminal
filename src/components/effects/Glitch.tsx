export async function runGlitchEffect(
  text: string,
  appendLine: (line: { type: "output"; content: string }) => void,
  speed: number = 60
) {
  const glitchChars = ["#", "%", "@", "!", "?", "/", "\\", "*", "+", "=", "~"];

  // Phase 1 — glitch aléatoire
  for (let i = 0; i < 8; i++) {
    const scrambled = text
      .split("")
      .map((char) =>
        Math.random() < 0.3
          ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
          : char
      )
      .join("");

    appendLine({ type: "output", content: scrambled });
    await new Promise((resolve) => setTimeout(resolve, speed));
  }

  // Phase 2 — texte final
  appendLine({ type: "output", content: text });
}
