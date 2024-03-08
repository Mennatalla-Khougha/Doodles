import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doodles App",
  description: "Drawings sharing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="text-3xl font-bold bg-slate-200 space-x-4">
          <h1 className="bg-gradient-to-r from-blue-600 via-red-400 to-purple-500 inline-block text-transparent bg-clip-text">
            Doodles
          </h1>
        </header>
        <main className="p-4 space-x-4 space-y-4">{children}</main>
        </body>
    </html>
  );
}
