import Link from "next/link";
import BallAnimation from "./BallAnimation";

export default function Welcom() {
  return (
    <section className="relative w-full flex flex-col items-start justify-center p-4 gap-1 lg:p-12">
      <BallAnimation />
      <p
        className="font-medium text-gray5 text-sm uppercase sm:text-base  animate-fade
 animate-duration-[900ms] animate-delay-[500ms]"
      >
        ¡Hola, mi nombre es Exequiel Maydana!
      </p>
      <h1
        className="text-4xl font-black text-black textShadow sm:text-5xl lg:text-7xl animate-fade
  animate-duration-[900ms] animate-delay-[700ms]"
      >
        Desarrollador Web <br /> Full-Stack
      </h1>
      <p
        className="font-medium text-gray5 text-sm uppercase sm:text-base  animate-fade
 animate-duration-[900ms] animate-delay-[900ms]"
      >
        con especialización en <span className="text-indigo6">Front-End</span>
      </p>
      <p
        className="font-medium text-black sm:w-4/5 sm:text-lg lg:text-xl animate-fade
 animate-duration-[900ms] animate-delay-[900ms]"
      >
        En mi viaje de dos años explorando el mundo del desarrollo web, he
        enfocado mi energía en proyectos que desafían y perfeccionan mis
        habilidades Mi dedicación y creatividad son el motor que impulsa mi
        búsqueda constante de nuevas oportunidades para contribuir con
        soluciones innovadoras.
      </p>
      <Link
        href="/cv.pdf"
        download="cv-hernan-exequiel-maydana"
        target="_blank"
        className="pt-4 animate-fade
        animate-duration-[900ms] animate-delay-[1100ms]"
      >
        <button className="btn_download btn_7">
          <span>Descargar cv </span>
        </button>
      </Link>
    </section>
  );
}
