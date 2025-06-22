import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
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
  title: "Kinzix - Software compnay",
  description: "kinzix || Software  company ",
  icons: {
    icon: "/k.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SmoothCursor  className="hidden lg:block"/>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
