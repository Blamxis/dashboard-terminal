export async function runTypewriterEffect(
  text: string,
  appendLine: (line: { type: "output"; content: string }) => void,
  speed: number = 30
) {
  let output = "";

  for (let i = 0; i < text.length; i++) {
    output += text[i];

    appendLine({
      type: "output",
      content: output,
    });

    await new Promise((resolve) => setTimeout(resolve, speed));
  }
}
