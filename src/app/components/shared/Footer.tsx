import Link from "next/link";
import React from "react";
import { IoArrowUp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {


  return (
    <footer className="footer">
      {" "}
      <div className="background">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
        >
          <defs>
            <linearGradient id="bg" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(53, 127, 242, 0.6)" }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "rgba(38, 89, 190, 0.06)" }}
              ></stop>
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
      s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".3">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="4s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>
      <section className="w-full flex flex-col items-center justify-center gap-4 pt-20 z-50 sm:pt-36">
        <ul className="flex items-center justify-center gap-8 md:gap-12">
          <li className="instagram">
            <Link
              href="https://www.instagram.com/exe_m666/"
              target="_blank"
              className="text-2xl md:text-3xl"
            >
              <FaInstagram />
            </Link>
          </li>
          <li className="twitter">
            <Link
              href="https://twitter.com/ExeBikerr"
              target="_blank"
              className="text-2xl  md:text-3xl"
            >
              <FaTwitter />
            </Link>
          </li>
          <li className="linkedin">
            <Link
              href="https://www.linkedin.com/in/hernan-exequiel-maydana-913a50218/"
              target="_blank"
              className="text-2xl  md:text-3xl"
            >
              <FaLinkedin />
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-8 md:gap-14">
          <li className="text-lg text-gray1 md:text-xl">
            <Link href="/">Inicio</Link>
          </li>
          <li className="text-lg text-gray1 md:text-xl">
            <Link href="#about">Sobre mí </Link>
          </li>
          <li className="text-lg text-gray1 md:text-xl">
            <Link href="#portfolio">Proyectos</Link>
          </li>
          <li className="text-lg text-gray1 md:text-xl">
            <Link href="#contact">Contacto</Link>
          </li>
        </ul>
        <p className="text-sm text-gray1 md:text-base">
          Copyright © Exequiel Maydana · 2023
        </p>
      </section>
      <article className="absolute bottom-4 right-6 border-2 border-gray1 rounded-full p-2 lg:bottom-8 lg:right-12 z-50">
        <Link href="#backto">
          {" "}
          <span className="text-gray1 font-bold lg:text-3xl">
            <IoArrowUp />
          </span>
        </Link>
      </article>
    </footer>
  );
}
