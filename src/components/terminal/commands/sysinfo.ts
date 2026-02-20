import type { TerminalLine } from "../Terminal";

export default function sysinfo(): TerminalLine[] {
  return [
    { id: 0, type: "output", content: `User Agent : ${navigator.userAgent}` },
    { id: 1, type: "output", content: `Langue     : ${navigator.language}` },
    { id: 2, type: "output", content: `Online     : ${navigator.onLine ? "Oui" : "Non"}` },
    { id: 3, type: "output", content: `Cores CPU  : ${navigator.hardwareConcurrency}` },
  ];
}
