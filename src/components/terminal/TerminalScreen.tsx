"use client";

import { useEffect, useRef } from "react";
import type { TerminalLine } from "./Terminal";

export default function TerminalScreen({ history }: { history: TerminalLine[] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current?.scrollTo(0, ref.current.scrollHeight);
  }, [history]);

  return (
    <div
      ref={ref}
      className="h-100 overflow-y-auto p-4 text-green-400 text-sm space-y-1"
    >
      {history.map((line) => (
        <pre key={line.id} className="whitespace-pre-wrap">
          {line.content}
        </pre>
      ))}
    </div>
  );
}
