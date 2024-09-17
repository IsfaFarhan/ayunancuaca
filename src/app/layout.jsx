import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import tailwind from "tailwindcss";
import Navi from "./navi";
import { ButtonGithub, ButtonTentang } from "./button2";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayunan Suasana Malaysia",
  description: "Ayunan Suasana Malaysia adalah webapp cuaca di Malaysia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen p-2">
      <body className="bg-gradient-to-b from-[#f3fdfd] to-[#e4fffb] text-black">
        <Navi />
        {/* Layout UI */}
        <main className="flex justify-center items-centre min-h-[80vh] m-2">
          {children}
        </main>
        <footer className="">
          <ButtonTentang />
          <ButtonGithub />
        </footer>
      </body>
    </html>
  );
}
