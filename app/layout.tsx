import "@radix-ui/themes/styles.css";
import "./my-styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import { Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme accentColor="violet">
          <Navbar></Navbar>
          <main className="p-5">{children} </main>
        </Theme>
      </body>
    </html>
  );
}
