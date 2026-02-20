import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dashboard Terminal — Cyber Interactive Terminal",
    template: "%s | Dashboard Terminal",
  },

  description:
    "Un terminal web interactif en style cyber, avec animations avancées, système de fichiers virtuel et commandes personnalisées. Développé en Next.js, React et TypeScript.",

  keywords: [
    "terminal web",
    "dashboard terminal",
    "cyber terminal",
    "nextjs terminal",
    "react terminal",
    "portfolio développeur",
    "Maxime Gavinet",
    "interface cyber",
    "terminal interactif",
  ],

  authors: [{ name: "Maxime Gavinet" }],
  creator: "Maxime Gavinet",
  publisher: "Maxime Gavinet",

  metadataBase: new URL("https://TON-DOMAINE-VERCEL.app"),

  openGraph: {
    title: "Dashboard Terminal — Cyber Interactive Terminal",
    description:
      "Terminal web immersif avec animations cyber, système de fichiers virtuel et commandes avancées.",
    url: "https://TON-DOMAINE-VERCEL.app",
    siteName: "Dashboard Terminal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dashboard Terminal Preview",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dashboard Terminal — Cyber Interactive Terminal",
    description:
      "Terminal web immersif avec animations cyber, système de fichiers virtuel et commandes avancées.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  robots: {
    index: true,
    follow: true,
  },

  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-black text-green-400 font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
