export async function runLoadingEffect(
  appendLine: (line: { type: "output"; content: string }) => void,
  speed: number = 120
) {
  const steps = [
    "[█---------] 10%",
    "[██--------] 20%",
    "[███-------] 30%",
    "[████------] 40%",
    "[█████-----] 50%",
    "[██████----] 60%",
    "[███████---] 70%",
    "[████████--] 80%",
    "[█████████-] 90%",
    "[██████████] 100%",
    "Chargement terminé."
  ];

  for (const step of steps) {
    appendLine({ type: "output", content: step });
    await new Promise((resolve) => setTimeout(resolve, speed));
  }
}
