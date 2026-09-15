import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mitodo",
  description: "Get things done with a clean, clutter-free online checklist. Add tasks, track progress, and access your daily to-do list anywhere, anytime.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
       <Providers> 
        {children}
       </Providers>
      </body>
    </html>
  );
}
