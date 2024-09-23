"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header
      id="backto"
      className="w-full p-4 relative left-0 top-0 flex items-center justify-between lg:p-6"
    >
      <Link href="/">
        <article className="flex items-center justify-center gap-2">
          <figure className="w-[60px] h-[60px] rounded-full bg-slate-100 lg:w-[80px] lg:h-[80px]">
            <Image
              width={573}
              height={573}
              src="/img/my.jpg"
              alt="profile potho"
              className="w-full h-full object-cover rounded-full shadow-md"
            />
          </figure>
          <p className="font-semibold lg:text-xl lg:font-semibold">ExeDev</p>
          <figure className="w-[20px] h-[20px]">
            <Image
              width={422}
              height={422}
              src="/icon/verified.webp"
              alt="icon verified"
              className="w-full h-full rounded-full shadow-md"
            />
          </figure>
        </article>
      </Link>

      <button
        className="w-[20px] h-[20px] block z-[100] lg:hidden"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? (
          <Image
            width={386}
            height={386}
            src="/icon/close.svg"
            alt="close"
            className="w-full h-full object-contain"
          />
        ) : (
          <Image
            width={386}
            height={386}
            src="/icon/menu.svg"
            alt="menu burguer"
            className="w-full h-full object-contain"
          />
        )}
      </button>

      <nav className={`${openMenu ? styles.open_menu : styles.menu}`}>
        <div style={{ transitionDelay: "0.1s" }}></div>
        <div style={{ transitionDelay: "0.2s" }}></div>
        <div style={{ transitionDelay: "0.3s" }}></div>
        <div style={{ transitionDelay: "0.4s" }}></div>
        <ul className={`${openMenu ? styles.submenuOpen : styles.submenu}`}>
          <li
            style={{ animationDelay: "0.4s" }}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Link href="/" className="m:text-xl sm:text-2xl">
              Inicio
            </Link>
          </li>
          <li
            style={{ animationDelay: "0.5s" }}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Link href="#about" className="m:text-xl sm:text-2xl">
              Sobre mí{" "}
            </Link>
          </li>
          <li
            style={{ animationDelay: "0.6s" }}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Link href="#portfolio" className="m:text-xl sm:text-2xl">
              Proyectos
            </Link>
          </li>
          <li
            style={{ animationDelay: "0.7s" }}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Link href="#contact" className="m:text-xl sm:text-2xl">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="hidden w-auto lg:flex items-center justify-end">
        <ul className="flex items-center justify-center gap-12 text-xl font-semibold lg:text-xl ">
          <li>
            <Link
              href="/"
              passHref
              className="hover:border-b-2 hover:border-indigo6 transition duration-300"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="hover:border-b-2 hover:border-indigo6 transition duration-300"
            >
              Sobre mí{" "}
            </Link>
          </li>
          <li>
            <Link
              href="/#portfolio"
              className="hover:border-b-2 hover:border-indigo6 transition duration-300"
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="hover:border-b-2 hover:border-indigo6 transition duration-300"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
