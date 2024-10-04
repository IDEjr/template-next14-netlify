import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { handleJSONfile } from '@/utils/jsonHandler'
import React from 'react'

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Exemplo title",
  description: "Exemplo description.",
  charset: "utf-8",
  openGraph: {
    title: "IDE",
    description: "Exemplo de descrição.",
    type: "website",
    image: "https://avatars.githubusercontent.com/u/17241356?s=200&v=4",
  },
  twitter: {
    card: "summary",
    creator: "IDE",
    title: "Exemplo title",
    description: "Exemplo de descrição.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const foo = handleJSONfile(`./content/navFooter/footer.json`);
  const contato = handleJSONfile(`./content/contato/contato.json`);
  const nav = handleJSONfile(`./content/navFooter/navbar.json`);
  
  return (
    <html lang="pt-BR">
      <head> descomentar se netlify CMS não funcionar
        <Script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <React.Fragment>
        <Navbar contato = {contato} nav = {nav}/>
      </React.Fragment>
        {children}
      <Footer contato = {contato} footer = {foo}/>
      </body>
    </html>
  );
}