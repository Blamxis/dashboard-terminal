export default function TerminalScreen() {
  return (
    <div className="h-100 overflow-y-auto p-4 text-green-400 text-sm">
      <p>Bienvenue dans le Dashboard Terminal.</p>
      <p>Tapez <span className="text-green-300">help</span> pour voir les commandes disponibles.</p>
    </div>
  );
}
