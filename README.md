# 🖥️ Dashboard Terminal — Cyber Interactive Terminal

Un terminal interactif moderne, immersif et entièrement animé, développé avec **Next.js**, **React**, **TypeScript** et **TailwindCSS**.  
Ce projet simule un mini‑OS cyber dans le navigateur, avec un système de fichiers virtuel, des commandes avancées et des effets visuels premium.

---

## ✨ Fonctionnalités principales

### 🗂️ Système de fichiers virtuel

- **Navigation réelle :**
  - `pwd` — affiche le répertoire courant
  - `ls` — liste les fichiers/dossiers
  - `cd <dossier>` — change de répertoire
  - `tree` — affiche l’arborescence complète
- **Arborescence typée :**
  - `home/Maxime/projects/...`
  - `documents`, `system`, etc.
- **Typage strict :**
  - Modèle `FileNode`
  - Accès sécurisé aux nœuds
- **Comportement proche d’un vrai shell :**
  - gestion des erreurs (`dossier introuvable`, etc.)

---

### ⚡ Effets visuels avancés

- `typing "texte"`  
  → effet machine à écrire (affichage lettre par lettre)
- `loading`  
  → barre de chargement animée avec progression
- `glitch "texte"`  
  → texte instable, distordu, effet cyber
- `matrix`  
  → pluie de caractères façon Matrix
- `scan`  
  → animation de scan système avec étapes successives

Chaque effet est isolé dans `/effects` et géré via un **dispatcher d’animations** dans `Terminal.tsx`.

---

### 🧠 Commandes système et utilitaires

- `help` — liste toutes les commandes disponibles  
- `clear` — nettoie l’écran du terminal  
- `whoami` — affiche l’utilisateur courant  
- `about` — informations sur le terminal  
- `projects` — liste des projets  
- `neofetch` — infos système stylées  
- `sysinfo` — infos navigateur  
- `banner` — ASCII art d’introduction  
- `history` — historique (WIP)  
- `ping`, `echo`, `date`, `time`, `version`, `random`, `roll`, `flip`…

---

## 🧬 Stack technique

| Technologie     | Rôle                          |
|----------------|-------------------------------|
| **Next.js**    | Framework principal           |
| **React**      | Interface interactive         |
| **TypeScript** | Typage strict et robuste      |
| **TailwindCSS**| UI moderne et responsive      |
| **Vercel**     | Déploiement et hosting        |

---

## 📁 Structure du projet

Voici **ta structure réelle**, conforme à ton repo :

```bash
src/
├─ app/
│   ├─ layout.tsx
│   └─ page.tsx
│
├─ components/
│   └─ terminal/
│       ├─ Terminal.tsx
│       ├─ TerminalHeader.tsx
│       ├─ TerminalScreen.tsx
│       ├─ TerminalInput.tsx
│       ├─ commands/
│       │   ├─ index.ts
│       │   ├─ help.ts
│       │   ├─ clear.ts
│       │   ├─ whoami.ts
│       │   ├─ about.ts
│       │   ├─ ping.ts
│       │   ├─ echo.ts
│       │   ├─ date.ts
│       │   ├─ time.ts
│       │   ├─ version.ts
│       │   ├─ random.ts
│       │   ├─ roll.ts
│       │   ├─ flip.ts
│       │   ├─ banner.ts
│       │   ├─ login.ts
│       │   ├─ logout.ts
│       │   ├─ neofetch.ts
│       │   ├─ sysinfo.ts
│       │   ├─ projects.ts
│       │   ├─ history.ts
│       │   ├─ scan.ts
│       │   ├─ pwd.ts
│       │   ├─ ls.ts
│       │   ├─ cd.ts
│       │   ├─ tree.ts
│       │   ├─ typing.ts
│       │   ├─ loading.ts
│       │   ├─ glitch.ts
│       │   └─ matrix.ts
│       │
│       ├─ effects/
│       │   ├─ typewriter.tsx
│       │   ├─ loading.tsx
│       │   ├─ glitch.tsx
│       │   └─ matrix.tsx
│       │
│       └─ filesystem.ts
│
└─ styles/
└─ globals.css
```
---

## 🧪 Commandes disponibles

### 🔹 Système

```bash
help
clear
whoami
about
projects
history
banner
neofetch
sysinfo
```

### 🔹 Fichiers

```bash
pwd
ls
cd <dossier>
tree
```

### 🔹 Animations

```bash
typing <texte>
loading
glitch <texte>
matrix
scan
```

### 🔹 Divers

```bash
ping
echo <texte>
date
time
version
random
roll
flip
```

---

## 🛠️ Installation & développement

### 1. Cloner le projet

```bash
git clone https://github.com/<ton-user>/dashboard-terminal.git
cd dashboard-terminal
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```
L’application sera disponible sur :

```bash
👉 http://localhost:3000
```

---

## 📄 Licence

Projet sous licence **MIT**.

---

## 👤 Auteur

**Maxime Gavinet**  
Développeur Web — Next.js / React / TypeScript  

[![Portfolio](https://img.shields.io/badge/Portfolio-000?style=for-the-badge&logo=vercel&logoColor=white)](https://maxime-gavinet.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Blamxis)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/blamxis/)

