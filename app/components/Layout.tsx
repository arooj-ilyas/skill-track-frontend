import React, { ReactNode } from "react";
import Link from "next/link";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-black dark:text-white">
      <header className="bg-white dark:bg-zinc-900 p-4 shadow flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          SkillTrack
        </Link>
        <nav className="flex gap-4">
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/programs" className="hover:underline">
            Programs
          </Link>
          <Link href="/" className="hover:underline">
            Log Out
          </Link>
        </nav>
      </header>

      <main className="p-8">{children}</main>
    </div>
  );
}
