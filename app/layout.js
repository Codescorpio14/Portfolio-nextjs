import { Poppins } from "next/font/google";
import { MetaData } from "./_Config/metadata";
import "./globals.css";

import { Header, Footer } from "./_layout/Shared/";
import { AnimatePresence } from "motion/react";
import { DarkMode, PreloadAnimation } from "./_components/";
import { PageTransition } from "./_components/animations";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = MetaData;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <PreloadAnimation />
        <Header />
        <AnimatePresence mode="wait">
          <PageTransition>
            <main className="lg:container">{children}</main>
          </PageTransition>
        </AnimatePresence>
        <Footer />
        <DarkMode />
        <script
          src="https://kit.fontawesome.com/5076bed74f.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </body>
    </html>
  );
}
