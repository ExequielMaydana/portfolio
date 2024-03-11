"use client";
import Image from "next/image";
import { imagesSkills } from "./imgsSkills";
import HeaderSections from "@/app/libs/HeaderSections";
import styles from "../../styles/about.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [onContainer, setonContainer] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, bottom } = containerRef.current.getBoundingClientRect();
        const inView = top < window.innerHeight && bottom >= 0;

        if (inView) {
          setonContainer(true);
        }
        setonContainer(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="w-full flex flex-col gap-4 p-4 lg:p-12 mb-12 overflow-x-hidden"
      id="about"
    >
      <HeaderSections title="Sobre mí" />
      <article className="w-full flex flex-col items-center justify-center text-center gap-8 mt-8 lg:flex-row lg:items-start lg:gap-16">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, x: -200 }}
          animate={onContainer && { x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center justify-center gap-8 lg:justify-start">
            <figure className="w-[250px] h-[250px] border border-black rounded-full shadow-lg overflow-hidden lg:w-[300px] lg:h-[300px]">
              <Image
                width={620}
                height={620}
                src="/img/MyAvatarOne.webp"
                alt="my avatar"
                className="w-full h-full object-contain pt-6 lg:pt-8"
              />
            </figure>

            <div className="hidden lg:flex flex-col items-center justify-center gap-2 text-black">
              <p>
                Puedes saber más
                <br /> de mi en…
              </p>
              <div className={styles.main}>
                <div className={styles.up}>
                  <button className={styles.card1}>
                    <span className={styles.instagram}>
                      <Link
                        href="https://www.instagram.com/exe_m666/"
                        target="_blank"
                      >
                        {" "}
                        <FaInstagram />
                      </Link>
                    </span>
                  </button>
                  <button className={styles.card2}>
                    <span className={styles.twitter}>
                      <Link
                        href="https://twitter.com/ExeBikerr"
                        target="_blank"
                      >
                        {" "}
                        <FaTwitter />
                      </Link>
                    </span>
                  </button>
                </div>
                <div className={styles.down}>
                  <button className={styles.card3}>
                    <span className={styles.github}>
                      <Link
                        href="https://github.com/ExequielMaydana"
                        target="_blank"
                      >
                        {" "}
                        <FaGithub />
                      </Link>
                    </span>
                  </button>
                  <button className={styles.card4}>
                    <span className={styles.linkedin}>
                      <Link
                        href="https://www.linkedin.com/in/hernan-exequiel-maydana-913a50218/"
                        target="_blank"
                      >
                        {" "}
                        <FaLinkedin />
                      </Link>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="w-full lg:w-[60%]">
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, x: 200 }}
            animate={onContainer && { x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full flex flex-col items-center justify-center text-center gap-12">
              {" "}
              <p className="font-medium sm:w-[90%] lg:w-full md:text-lg">
                {" "}
                Me complace presentarle mi perfil como Desarrollador Web Full
                Stack. Poniendo el foco un poco mas en el frontend, he
                desarrollado una sólida base de conocimientos y habilidades
                técnicas que me permiten diseñar y construir aplicaciones web
                completas y eficientes.
                <br />
                <br />
                Durante mi trayectoria profesional, he trabajado en diversos
                proyectos en los que he tenido la oportunidad de desempeñar un
                papel integral en todas las fases del ciclo de vida del
                desarrollo de software. He colaborado estrechamente con equipos
                multidisciplinarios, incluyendo diseñadores, desarrolladores
                frontend y backend, para crear soluciones web de alta calidad y
                rendimiento.
                <br />
                <br />
                Estas son algunas tecnologías con las que he estado trabajando
                recientemente.
              </p>
              <ul className="w-full flex flex-wrap items-center justify-center gap-8">
                {imagesSkills.map((img) => (
                  <li
                    key={img.id}
                    className="flex flex-col gap-1 items-center justify-center"
                  >
                    <figure className="w-[35px] h-[35px]">
                      <Image
                        width={300}
                        height={300}
                        src={img.imageUrl}
                        alt="img skill"
                        className="w-full h-full object-contain imgShadow"
                      />
                    </figure>
                    <p className="text-xs text-gray">{img.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </article>
      <article>
        <div className={styles.squares1}></div>
        <div className={styles.squares2}></div>
        <div className={styles.squares3}></div>
        <div className={styles.squares4}></div>
      </article>
    </section>
  );
}
