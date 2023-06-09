"use client";
import { Navbar } from "../components/Navbar";
import { useEffect } from "react";
import "./globals.css";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        {(pathname === "/register" || pathname === "/profile" || pathname === "/login") ?  null : <Navbar /> }
        {children}
      </body>
    </html>
  );
}
