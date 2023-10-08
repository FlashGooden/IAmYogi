import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@/Components/Chakra";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I Am Yogi",
  description: "A Yoga landing page by  ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
