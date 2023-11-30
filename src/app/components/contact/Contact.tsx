import HeaderSections from "@/app/libs/HeaderSections";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Form from "./Form";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      className="w-full flex flex-col gap-8 p-4 lg:p-12 mb-12"
      id="contact"
    >
      <header className="w-full flex flex-col gap-2">
        <HeaderSections title="Contacto" />
        <b className="text-black md:text-xl">¡Creemos algo juntos!</b>
        <p className="font-medium text-dimGray md:w-[70%]  md:text-xl">
          ¿Le ha interesado mi perfil? ¿Busca un desarrollador con talento para
          dar vida a su solución web? ¡Cuéntemelo!
        </p>
        <Link
          href="https://wa.link/is1b74"
          target="_blank"
          className="w-[200px] flex items-center justify-start gap-2 text-[#00bb2d] md:text-lg"
        >
          +54 3454 076854 <FaWhatsapp />
        </Link>
      </header>
      <article className="w-full flex items-center justify-center md:gap-4">
        <figure className="hidden md:block w-full h-[500px]">
          <Image
            width={1000}
            height={1000}
            src="/img/contact.svg"
            alt="ilustration contact"
            className="w-full h-full object-contain"
          />
        </figure>

        <Form />
      </article>
    </section>
  );
}
