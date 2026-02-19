import TerminalHeader from "./TerminalHeader";
import TerminalScreen from "./TerminalScreen";
import TerminalInput from "./TerminalInput";

export default function Terminal() {
  return (
    <div className="
      max-w-4xl mx-auto mt-10
      bg-black/80 border border-green-500/40 rounded-lg
      shadow-[0_0_25px_rgba(34,197,94,0.35)]
      backdrop-blur-sm
      overflow-hidden
    ">
      <TerminalHeader />
      <TerminalScreen />
      <TerminalInput />
    </div>
  );
}
