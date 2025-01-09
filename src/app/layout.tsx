import React from "react";
import "../styles/globals.css";
import { Nunito } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MyContextProvider } from "@/store/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeContextProvider } from "@/store/themeStore";
import ThemedBody from "@/components/ThemedBody";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.className}>
      <MyContextProvider>
        <ThemeContextProvider>
          <ThemedBody>
            <SidebarProvider className="h-screen flex flex-col">
              <Header />
              <main className="dark:bg-blue-500 dark:text-black">
                <div className="block sm:hidden">
                  <AppSidebar />
                </div>
                {children}
              </main>
              <Footer />
            </SidebarProvider>
            <Toaster />
          </ThemedBody>
        </ThemeContextProvider>
      </MyContextProvider>
    </html>
  );
  // return (
  //   <html lang="en">
  //     <body>{children}</body>
  //   </html>
  // );
}
