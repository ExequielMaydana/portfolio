import Link from "next/link";
import React from "react";
import { IoArrowUp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full relative flex flex-col items-center justify-center gap-4 p-12 bg-black">
      {" "}
      <ul className="flex items-center justify-center gap-8 text-grayCien text-2xl">
        <li className="instagram">
          <Link href="https://www.instagram.com/exe_m666/" target="_blank">
            <FaInstagram />
          </Link>
        </li>
        <li className="twitter">
          <Link href="https://twitter.com/ExeBikerr" target="_blank">
            <FaTwitter />
          </Link>
        </li>
        <li className="linkedin">
          <Link
            href="https://www.linkedin.com/in/hernan-exequiel-maydana-913a50218/"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
        </li>
      </ul>
      <p className="text-center font-medium text-grayCien">
        Copyright © Exequiel Maydana · 2023
      </p>
      <article className="absolute bottom-2 right-4 border border-grayCien rounded-full p-2 lg:bottom-4 lg:right-8">
        <Link href="#backto">
          {" "}
          <span className="text-grayCien">
            <IoArrowUp />
          </span>
        </Link>
      </article>
    </footer>
  );
}
