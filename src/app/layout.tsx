import type { Metadata } from "next";
import { montserrat } from "./libs/fonts";
import "./styles/globals.css";
import "swiper/css/bundle";

import Navbar from "./components/shared/Navbar";
import Head from "next/head";
import Link from "next/link";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/shared/Footer";

export const metadata: Metadata = {
  title: "Portafolio | Exequiel Maydana",
  description:
    "Desarrollador web apasionado, especializado en Next.js. Descubre mi enfoque creativo y eficiente para proyectos web cautivadores. Explora mi portafolio ahora.",
  icons: {
    icon: [
      {
        url: "icon/icon.ico",
        href: "icon/icon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {" "}
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          outerStyle={{
            border: "3px solid #828DA9",
          }}
          innerStyle={{
            backgroundColor: "#828DA9",
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
