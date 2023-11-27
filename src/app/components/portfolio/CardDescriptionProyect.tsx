import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import { IoNavigate } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import styles from "../../styles/portfolio.module.css";
interface Project {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  slug: string;
  imgs: { id: number; imgUrl: string }[];
}
export default function CardDescriptionProyect(Props: { project?: Project }) {
  const { project } = Props;

  return (
    <article className="w-full flex flex-col gap-16 lg:flex-row">
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
            <figure className="w-full h-full">
              <Image
                width={564}
                height={752}
                src={data.imgUrl}
                alt="img pokemon"
                className="w-full h-full object-cover rounded-md"
                priority
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex flex-col gap-6 lg:w-[80%]">
        <h3 className="text-2xl font-semibold text-black sm:text-center xl:text-4xl">
          {project?.title}
        </h3>
        <p className="sm:text-center md:w-[80%] md:m-auto lg:w-full">
          Este proyecto demuestra mi habilidad en el desarrollo frontend
          utilizando React.js y Vite. Se trata de una aplicación sencilla que
          consume la API de Rick y Morty, presentando de manera organizada y
          accesible la información sobre los personajes de la serie.
          <br /> <br /> Al acceder a la web, los usuarios pueden explorar una
          lista completa de personajes con funcionalidades de paginación para
          una experiencia de usuario fluida. Además, se incorporan dos filtros
          intuitivos, permitiendo a los usuarios refinar la búsqueda según la
          ubicación o el nombre del personaje.
          <br /> <br /> Esta aplicación, aunque inicialmente concebida como un
          ejercicio para consolidar mis habilidades en React.js durante mi
          proceso de aprendizaje, destaca por su funcionalidad práctica y diseño
          intuitivo.
        </p>
        <div className="flex items-center justify-center gap-8">
          {/* <Link
            href="#"
            target="_blank"
            className={`${styles.button_navigate}`}
          >
            Probar ahora
          </Link> */}
          <div className={`${styles.button_borders}`}>
            <button className={styles.primary_button}>
              <Link
                href="#"
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

          <div className={`${styles.button_borders}`}>
            <button className={styles.primary_button}>
              <Link
                href="#"
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
