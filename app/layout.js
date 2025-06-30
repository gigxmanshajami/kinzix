import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import ClientRoot from "./components/Clientroot";
import { NavbarHome } from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kinzix Innovation | Smart Software Solutions & Tech Consulting",
  description: "Kinzix Innovation builds responsive websites, powerful mobile apps, and reliable software to help businesses grow online. Also offers custom tech solutions that are fast, scalable, and designed to meet your goals in the digital age.",
  keywords: 'Kinzix Innovation, software solutions, tech consulting, digital transformation, AI software, automation services, custom software development, IT consulting firm, Kinzix software, business automation',
  icons: {
    icon: "/k.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>

      <body>
        {/* <SmoothCursor  className="hidden lg:block"/> */}
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
