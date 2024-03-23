import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./main.css";
import "./vendors.css";
import { SidebarProvider } from "@/context/SidebarContext";
import { BodyPart } from "./layoutContent";
import { DarkThemeProvider } from "@/context/DarkThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mihna",
  description: "Formation Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider> 
      <DarkThemeProvider>
        <BodyPart children={children} inter={inter} />
      </DarkThemeProvider>
    </SidebarProvider>
  );
}

