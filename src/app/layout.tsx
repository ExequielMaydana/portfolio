import type { Metadata } from "next";
import { montserrat } from "./libs/fonts";
import "./styles/globals.css";
import "swiper/css/bundle";
import Navbar from "./components/shared/Navbar";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/shared/Footer";

export const metadata: Metadata = {
  title: "Portafolio | Exequiel Maydana",
  description:
    "Experto en desarrollo web con especialización en Next.js. Ofrezco soluciones innovadoras y eficientes para proyectos web de alta calidad. Explora mi portafolio profesional para ver ejemplos de mi trabajo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="twitter:title" content="Exequiel Maydana | Desarrollador Web" />
        <meta name="twitter:description" content="Experto en desarrollo web con especialización en Next.js. Ofrezco soluciones innovadoras y eficientes para proyectos web de alta calidad. Explora mi portafolio profesional para ver ejemplos de mi trabajo." />
        <meta name="twitter:image" content="/img/me.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="desarrollador web, Next.js, soluciones web, portafolio profesional, Exequiel Maydana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="es" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exequielmaydana.vercel.app/" />
        <meta property="og:title" content="Exequiel Maydana | Desarrollador Web" />
        <meta property="og:description" content="Experto en desarrollo web con especialización en Next.js. Ofrezco soluciones innovadoras y eficientes para proyectos web de alta calidad. Explora mi portafolio profesional para ver ejemplos de mi trabajo." />
        <meta property="og:image" content="https://exequielmaydana.vercel.app/img/me.png" />

        <link rel="canonical" href="https://exequielmaydana.vercel.app/" />
        <meta name="robots" content="index, follow" />

        <meta name="DC.title" content="Exequiel Maydana | Desarrollador Web Senior" />
        <meta name="DC.creator" content="Exequiel Maydana" />
        <meta name="DC.description" content="Experto en desarrollo web con especialización en Next.js. Ofrezco soluciones innovadoras y eficientes para proyectos web de alta calidad. Explora mi portafolio profesional para ver ejemplos de mi trabajo." />
        <meta name="DC.language" content="es" />


      </head>
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
