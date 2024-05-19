"use client";
import ParallaxText from "./components/ParallaxText";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Welcom from "./components/home/Welcom";
import Portfolio from "./components/portfolio/Portfolio";
import Values from "./components/values/Values";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./styles/main.module.css"
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <main className="flex flex-col items-center justify-between">
        <Welcom />
        <article className="w-full py-16">
          <ParallaxText baseVelocity={-5}>
            Escribir código es fácil. Hacer que funcione es un arte.
          </ParallaxText>
          <ParallaxText baseVelocity={5}>
            Transformando ideas en código, y sueños en experiencias digitales.
          </ParallaxText>
        </article>

        <About />
        <Portfolio />
        <Values />
        <Contact />
        <article className="w-full">
          <div className={styles.squares1}></div>
          <div className={styles.squares2}></div>
          <div className={styles.squares3}></div>
          <div className={styles.squares4}></div>
        </article>
      </main>
    </>
  );
}
