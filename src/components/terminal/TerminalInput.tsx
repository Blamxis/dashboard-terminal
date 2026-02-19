"use client";

import { useState, useRef, useEffect } from "react";

export default function TerminalInput({ onSubmitCommand }: { onSubmitCommand: (cmd: string) => void }) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      className="px-4 py-3 bg-black border-t border-green-500/30 cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 text-green-400 text-sm">
        <span className="text-green-300">user@terminal</span>
        <span>~$</span>

        <span className="relative">
          {value}
          <span className="cursor">█</span>
        </span>
      </div>

      <input
        ref={inputRef}
        type="text"
        className="absolute opacity-0 pointer-events-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmitCommand(value);
            setValue("");
          }
        }}
      />
    </div>
  );
}
