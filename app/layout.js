import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_layout/Shared/Header";
import Footer from "./_layout/Shared/Footer";
import { MetaData } from "./_Config/metadata";
import { AnimatePresence } from "motion/react";
import PageTransition from "./_components/animations/PageTransition";
import DarkMode from "./_components/DarkMode";
import PreloadAnimation from "./_components/PreloadAnimation";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = MetaData;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <PreloadAnimation />
        <Header />
        <AnimatePresence mode="wait">
          <PageTransition>{children}</PageTransition>
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
