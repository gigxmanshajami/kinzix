import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import ClientRoot from "./components/Clientroot";
import { NavbarHome } from "./components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kinzix | Smart Software Solutions & Tech Consulting",
  description:
    "Kinzix Innovation builds responsive websites, powerful mobile apps, and reliable software to help businesses grow online. Also offers custom tech solutions that are fast, scalable, and designed to meet your goals in the digital age.",
  keywords:
    "Kinzix Innovation, software solutions, tech consulting, digital transformation, AI software, automation services, custom software development, IT consulting firm, Kinzix software, business automation",
  icons: {
    icon: "/kx.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JL0DPL01MK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JL0DPL01MK');
          `}
        </Script>

        {/* Schema.org Structured Data for Sitelinks */}
        <Script id="schema-sitelinks" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Kinzix",
            "url": "https://kinzix.com"
          })}
        </Script>
      </head>
      <body>
        {/* <SmoothCursor className="hidden lg:block" /> */}
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
