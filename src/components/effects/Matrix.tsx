export async function runMatrixEffect(
  appendLine: (line: { type: "output"; content: string }) => void,
  duration: number = 1500
) {
  const chars = "01abcdefghijklmnopqrstuvwxyz$#@%&";
  const lines = 20;
  const columns = 32;

  const start = Date.now();

  while (Date.now() - start < duration) {
    let line = "";
    for (let i = 0; i < columns; i++) {
      line += chars[Math.floor(Math.random() * chars.length)];
    }

    appendLine({ type: "output", content: line });

    await new Promise((resolve) => setTimeout(resolve, 40));
  }

  appendLine({ type: "output", content: "Matrix terminé." });
}
