import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Dashboard Terminal",
  description: "Terminal web interactif en style cyber.",
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
