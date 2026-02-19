import type { TerminalLine } from "../Terminal";

import help from "./help";
import clear from "./clear";
import whoami from "./whoami";
import about from "./about";
import ping from "./ping";
import echo from "./echo";
import date from "./date";
import time from "./time";
import version from "./version";
import random from "./random";
import roll from "./roll";
import flip from "./flip";
import banner from "./banner";
import login from "./login";
import logout from "./logout";

export type CommandContext = {
  username: string;
  setUsername: (name: string) => void;
};

export type CommandHandler = (args: string[], ctx: CommandContext) => TerminalLine[];

export type CommandDefinition = {
  description: string;
  handler: CommandHandler;
};

export const commands: Record<string, CommandDefinition> = {
  help:   { description: "Affiche la liste des commandes disponibles", handler: help },
  clear:  { description: "Nettoie le terminal", handler: clear },
  whoami: { description: "Affiche l'utilisateur actuel", handler: whoami },
  about:  { description: "À propos du Dashboard Terminal", handler: about },
  ping:   { description: "Répond 'pong'", handler: ping },
  echo:   { description: "Répète le texte fourni", handler: echo },
  date:   { description: "Affiche la date actuelle", handler: date },
  time:   { description: "Affiche l'heure actuelle", handler: time },
  version:{ description: "Affiche la version du terminal", handler: version },
  random: { description: "Nombre aléatoire entre 0 et 99", handler: random },
  roll:   { description: "Lance un dé (1–6)", handler: roll },
  flip:   { description: "Pile ou face", handler: flip },
  banner: { description: "Affiche un ASCII art stylé", handler: banner },
  login:  { description: "Changer l'utilisateur courant", handler: login },
  logout: { description: "Revenir à l'utilisateur Invité", handler: logout },
};

export default function runCommand(input: string, ctx: CommandContext): TerminalLine[] {
  const [cmd, ...args] = input.trim().split(" ");

  const entry = commands[cmd];

  if (!entry) {
    return [
      {
        id: 0,
        type: "output",
        content: `Commande inconnue: ${cmd}. Tapez "help" pour la liste.`,
      },
    ];
  }

  return entry.handler(args, ctx);
}
