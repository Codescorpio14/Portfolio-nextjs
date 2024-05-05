import { Inter } from "next/font/google";
import "./scss/main.scss";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aminul Hasan Alvir",
  description:
    "This is the portfolio site of frontend developer Aminul Hasan Alvir. This page serves as the online CV of its owner. If you have any queries or need any web development related help, please feel free to contact me",
  keywords:
    "Frontend developer,react developer,node js, CSS, JavaScript, scss, tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <script
          src="https://kit.fontawesome.com/5076bed74f.js"
          crossorigin="anonymous"
          defer
        ></script>
      </body>
    </html>
  );
}
