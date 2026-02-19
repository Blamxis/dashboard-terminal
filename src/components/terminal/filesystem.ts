export type FileNode = {
  type: "file" | "directory";
  children?: Record<string, FileNode>;
  content?: string;
};

export const fileSystem: FileNode = {
  type: "directory",
  children: {
    home: {
      type: "directory",
      children: {
        Maxime: {
          type: "directory",
          children: {
            projects: {
              type: "directory",
              children: {
                "dashboard-terminal": {
                  type: "file",
                  content: "Projet principal : Dashboard Terminal",
                },
                "cybertools-suite": {
                  type: "file",
                  content: "Suite d’outils cyber avancés",
                },
              },
            },
            documents: {
              type: "directory",
              children: {
                "readme.txt": {
                  type: "file",
                  content: "Bienvenue dans ton terminal personnel.",
                },
              },
            },
          },
        },
      },
    },
    system: {
      type: "directory",
      children: {
        logs: {
          type: "file",
          content: "System boot OK",
        },
      },
    },
  },
};
