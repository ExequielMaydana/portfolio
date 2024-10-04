"use client";
import Image from "next/image";
import { imagesSkills } from "./imgsSkills";
import HeaderSections from "@/app/libs/HeaderSections";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/main.module.css"

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
    <>
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
            <figure className="w-full h-full xl:min-w-[600px] xl:min-h-[400px]">
              <Image
                width={1000}
                height={1000}
                src="/img/about.svg"
                alt="my avatar"
                className="w-full h-full object-cover"
              />
            </figure>
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
                  desarrollo de software. He colaborado estrechamente con
                  equipos multidisciplinarios, incluyendo diseñadores,
                  desarrolladores frontend y backend, para crear soluciones web
                  de alta calidad y rendimiento.
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
      </section>

      <article className="w-full">
        <div className={styles.squares1}></div>
        <div className={styles.squares2}></div>
        <div className={styles.squares3}></div>
        <div className={styles.squares4}></div>
      </article>
    </>
  );
}
