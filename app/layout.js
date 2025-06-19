import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Footer from "./components/Footer";
import { NavbarHome } from "./components/Navbar";
import CalEm from "./components/cal";
import { NavbarProvider } from "./components/NavBarcontext";
import MeshImage from '@/public/noise.png';
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import ClientRoot from "./components/Clientroot";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kinzix",
  description: "kinzix",
  // icons: {
  //   icon: "/fav.ico",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}

    >

      <SmoothCursor />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/kx-light.ico" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/kx-dark.ico" media="(prefers-color-scheme: dark)" />
      </Head>
      <body>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
