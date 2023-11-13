import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mr. Chassy",
  description: "Chassy is chassing Chassy. Run......",
  keywords:
    "Mouse, Next.js, Tailwind CSS, Game, Animesh Acharya,Mouse Chaser,Mr. Chassy, Mr.s Chassy, Chassy, Chasing Mouse, Fun game, easy game, time pass, game by animesh acharya, animesh acharya's game, new trending game, useless game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
