import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

import Image from "next/image";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lista de países",
  description: "Uma lista de países usando a API REST Countries e Next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <main className="bg-gray-100 min-h-screen">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="container flex item-center gap-3">
              <Image src="/logo.svg" alt="Logo da aplicação - emoji de globo" width={48} height={48} />  
              <h1 className="font-bold text-2xl">Lista de países</h1>
            </section>
          </nav>
        {children}
        </main>
      </body>
    </html>
  );
}
