import { Outfit } from "next/font/google";
import "./globals.css";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Toaster } from "../components/ui/toaster";
import { toast } from "../components/ui/use-toast";
import { Suspense } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "../components/ui/theme";
import PlausibleProvider from "next-plausible";
import Providers from "./providers";

const inter = Outfit({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Inscription Raid",
  description: "Inscription Raid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <PlausibleProvider domain="raid-registering.myecl.fr" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Providers>
              {children}
              <Toaster />
            </Providers>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
