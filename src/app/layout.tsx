"use client";

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
import { ThemeProvider } from "../components/ui/theme";

const inter = Outfit({ subsets: ["latin-ext"] });

const queryClient = new QueryClient({
  // queryCache: new QueryCache({
  //   onError: (error) => {
  //     console.error(error);
  //     toast({
  //       title: "Erreur",
  //       description: "Une erreur est survenue, veuillez réessayer plus tard",
  //       variant: "destructive",
  //     });
  //   },
  // }),
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<div>Loading...</div>}>
            <QueryClientProvider client={queryClient}>
              {children}
              <Toaster />
            </QueryClientProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}