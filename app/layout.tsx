import "../styles/globals.css";

import classNames from "classnames";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { Logo } from "@/components/logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Game Codex",
  description: "Search for your favorite games",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-gradient-to-br from-slate-800 to-slate-900">
      <body
        className={classNames(
          inter.className,
          "min-h-screen w-full min-w-[320px] text-white"
        )}
      >
        <div className="p-4">
          <Logo />
        </div>
        {children}
      </body>
    </html>
  );
}
