import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useSelector } from "react-redux";
import "./globals.css";
import Welcome from "./Welcome"; 

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
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); 
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Conditionally render the Welcome component if the user is logged in */}
        {isLoggedIn && <Welcome />}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
