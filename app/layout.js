import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Footer from "./components/Footer";
import { NavbarHome } from "./components/Navbar";
import CalEm from "./components/cal";
import { NavbarProvider } from "./components/NavBarcontext";
import MeshImage from '@/public/noise.png';
import { SmoothCursor } from "@/components/ui/smooth-cursor";
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
        <link rel="icon" href="/kx-light.ico" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/kx-dark.ico" media="(prefers-color-scheme: dark)" />
      </Head>
      {/* style={{
        backgroundImage: `url(${MeshImage.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}  */}
      <body >
        <div className="lg:px-[91px]">
          <NavbarHome />
        </div>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
