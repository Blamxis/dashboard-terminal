export default function TerminalHeader() {
  return (
    <div
      className="
        flex items-center
        gap-2
        px-4
        h-15
        bg-linear-to-b from-black to-[#0a0a0a]
        border-b border-green-500/30
      "
    >
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>

      <p className="ml-4 text-green-400 text-sm opacity-80 leading-none">
        dashboard-terminal://v1.0
      </p>
    </div>
  );
}
