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
import neofetch from "./neofetch";
import sysinfo from "./sysinfo";
import projects from "./projects";
import history from "./history";
import scan from "./scan";

import pwd from "./pwd";
import ls from "./ls";
import cd from "./cd";
import tree from "./tree";

export type CommandContext = {
  username: string;
  setUsername: (name: string) => void;
  currentPath: string[];
  setCurrentPath: (path: string[]) => void;
};

export type CommandHandler = (args: string[], ctx: CommandContext) => TerminalLine[];

export type CommandDefinition = {
  description: string;
  handler: CommandHandler;
};

export const commands: Record<string, CommandDefinition> = {
  help: { description: "Affiche la liste des commandes", handler: help },
  clear: { description: "Nettoie le terminal", handler: clear },
  whoami: { description: "Affiche l'utilisateur actuel", handler: whoami },
  about: { description: "À propos du terminal", handler: about },
  ping: { description: "Répond pong", handler: ping },
  echo: { description: "Répète le texte", handler: echo },
  date: { description: "Affiche la date", handler: date },
  time: { description: "Affiche l'heure", handler: time },
  version: { description: "Version du terminal", handler: version },
  random: { description: "Nombre aléatoire", handler: random },
  roll: { description: "Lance un dé", handler: roll },
  flip: { description: "Pile ou face", handler: flip },
  banner: { description: "ASCII art stylé", handler: banner },
  login: { description: "Changer d'utilisateur", handler: login },
  logout: { description: "Déconnexion", handler: logout },
  neofetch: { description: "Infos système stylées", handler: neofetch },
  sysinfo: { description: "Infos navigateur", handler: sysinfo },
  projects: { description: "Liste des projets", handler: projects },
  history: { description: "Historique (WIP)", handler: history },
  scan: { description: "Scan cyber animé", handler: scan },

  pwd: { description: "Affiche le répertoire courant", handler: pwd },
  ls: { description: "Liste les fichiers", handler: ls },
  cd: { description: "Change de dossier", handler: cd },
  tree: { description: "Affiche l'arborescence", handler: tree },
};

export default function runCommand(input: string, ctx: CommandContext): TerminalLine[] {
  const [cmd, ...args] = input.trim().split(" ");

  const entry = commands[cmd];

  if (!entry) {
    return [
      {
        id: 0,
        type: "output",
        content: `Commande inconnue: ${cmd}. Tapez "help".`,
      },
    ];
  }

  return entry.handler(args, ctx);
}
