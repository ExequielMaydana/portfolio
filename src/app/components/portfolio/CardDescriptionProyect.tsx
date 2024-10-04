import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import { IoNavigate } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Suspense } from "react";
interface Project {
  id: number;
  title: string;
  imgUrl?: string;
  slug: string;
  imgs: { id: number; imgUrl: string }[];
  urlWebSite: string;
}
export default function CardDescriptionProyect(Props: { project?: Project }) {
  const { project } = Props;

  return (
    <article className="w-full flex flex-col gap-16 xl:flex-row">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="swiper-cube"
      >
        {project?.imgs.map((data) => (
          <SwiperSlide key={data.id}>
            <Suspense fallback={<div>Cargando...</div>}>
              <figure className="w-full h-full">
                <Image
                  width={1000}
                  height={1000}
                  src={data.imgUrl}
                  alt="img pokemon"
                  className="w-full h-full object-cover rounded-md"
                  priority
                />
              </figure>
            </Suspense>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex flex-col gap-6 xl:w-[60%]">
        <h3 className="text-2xl font-semibold text-black sm:text-center xl:text-4xl">
          {project?.title}
        </h3>
        {project?.title === "AGENCIA MAYA SEGURIDAD S.A" && (
          <div className="">
            <p>
              Este frontend fue desarrollado para{" "}
              <strong>AGENCIA MAYA SEGURIDAD S.A.</strong>, una agencia de
              seguridad privada que busca expandir su presencia digital y captar
              nuevos clientes. La landing page es un{" "}
              <b>sitio web moderno y completamente responsive</b>, lo que
              significa que se adapta perfectamente a cualquier dispositivo, ya
              sea celular, tablet o desktop. La web consta de cuatro secciones
              principales: <strong>Inicio</strong>,{" "}
              <strong>Sobre Nosotros</strong>, <strong>Servicios</strong>,{" "}
              <strong>¿Por qué elegir MAYA?</strong> y <strong>Contacto</strong>
              .
            </p>
            <br />
            <p>
              La web presenta efectos <strong>parallax</strong> para captar la
              atención del usuario, para la sección de servicios, se implementó
              un <b>slider interactivo</b> que permite a los usuarios navegar
              entre las distintas soluciones de seguridad que ofrece la agencia.
              Además, en la sección de los diferentes tipos de protección
              (hogares, empresas, campos, etc.), cada{" "}
              <b>card incluye un sutil efecto de zoom</b> al hacer hover,
              mejorando la interacción y resaltando los servicios de forma
              visual.
            </p>
            <br />
            <p>
              En la sección de contacto, los usuarios pueden encontrar
              fácilmente la ubicación de la agencia gracias a la integración de
              un <strong>mapa de Google Maps</strong>, que facilita el acceso a
              información clave. En resumen, esta landing page combina un diseño
              visual atractivo y una funcionalidad intuitiva, ofreciendo una
              experiencia optimizada para cualquier dispositivo.
            </p>
          </div>
        )}
        <div className="flex items-center justify-center gap-8">
          <div className="button_borders">
            <button className="primary_button">
              <Link
                href={project ? project.urlWebSite : "#"}
                target="_blank"
                className="flex items-center justify-center gap-2"
              >
                Probar ahora{" "}
                <span className="lg:text-xl">
                  <IoNavigate />
                </span>
              </Link>
            </button>
          </div>

          <div className="button_borders">
            <button className="primary_button">
              <Link
                href="https://github.com/ExequielMaydana"
                target="_blank"
                className="flex items-center justify-center gap-2"
              >
                {" "}
                Mi GitHub{" "}
                <span className="lg:text-xl">
                  <FaGithub />
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
