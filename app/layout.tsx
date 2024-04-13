import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationMenu from "./header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agro Matching",
  description: "Find Your Agro Match Here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavigationMenu />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
