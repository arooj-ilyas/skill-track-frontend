import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SkillTrack | Corporate Training",
  description: "Standardize employee training and compliance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-zinc-50 text-zinc-950">
        {children}
      </body>
    </html>
  );
}
