import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import { IoNavigate } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import styles from "../../styles/portfolio.module.css";
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
      <div className="w-full flex flex-col gap-6 lg:w-[80%]">
        <h3 className="text-2xl font-semibold text-black sm:text-center xl:text-4xl">
          {project?.title}
        </h3>
        {project?.title === "Ricky y Morty" && (
          <p className="sm:text-center md:w-[80%] md:m-auto lg:w-full">
            Este proyecto demuestra mi habilidad en el desarrollo frontend
            utilizando <b>React.js y Vite</b>. Se trata de una aplicación
            sencilla que consume la <b>API de Rick y Morty</b>, presentando de
            manera organizada y accesible la información sobre los personajes de
            la serie.
            <br /> <br /> Al acceder a la web, los usuarios pueden explorar una
            lista completa de personajes con{" "}
            <b>funcionalidades de paginación</b> para una experiencia de usuario
            fluida. Además, <b>se incorporan dos filtros intuitivos</b>,
            permitiendo a los usuarios refinar la búsqueda{" "}
            <b>según la ubicación o el nombre del personaje</b>.
            <br /> <br /> Esta aplicación, aunque inicialmente concebida como un
            ejercicio para consolidar mis habilidades en React.js durante mi
            proceso de aprendizaje, destaca por su funcionalidad práctica y
            diseño intuitivo.
          </p>
        )}
        {project?.title === "Pokemon GO" && (
          <p className="text-center md:w-[80%] md:m-auto">
            Proyecto con <b>React.js y Vite</b>. Esta Web consume la{" "}
            <b>PokeAPI</b>, ofrece una experiencia interactiva y protegida desde
            el inicio.
            <br />
            <br />
            Al ingresar, los usuarios deben proporcionar un nombre para acceder
            a las funciones protegidas de la aplicación. Utilizando{" "}
            <b>React Router</b>, se implementaron rutas protegidas para
            garantizar la seguridad del contenido. Además,{" "}
            <b>Redux y Redux Toolkit</b> se emplearon para gestionar el estado
            de la aplicación, almacenando el nombre del usuario para su
            visualización en páginas posteriores.
            <br />
            <br />
            La interfaz presenta una lista inicial de Pokémon con{" "}
            <b>filtros intuitivos por nombre y tipo</b>. Al hacer clic en un
            Pokémon, los usuarios son dirigidos a una página detallada que
            muestra información completa, incluyendo movimientos y estadísticas.
            <br />
            <br />
            Diseñado para ofrecer una experiencia de usuario fluida y
            profesional, este proyecto destaca no solo mis habilidades técnicas,
            sino también mi enfoque en la usabilidad y el diseño intuitivo.
          </p>
        )}
        {project?.title === "Personal Trainer" && (
          <p className="text-center md:w-[80%] md:m-auto">
            La plataforma que he desarrollado para mi colega, un entrenador
            personal, destaca por su enfoque sencillo y funcional. Construida en{" "}
            <b>Next.js</b>, esta web de entrenamiento ofrece a los usuarios una
            experiencia intuitiva a lo largo de cuatro páginas especializadas.
            <br />
            <br />
            La esencia del sitio radica en la venta de planes de entrenamiento
            personalizado. Los visitantes pueden explorar las distintas opciones
            de planes, seleccionar el que mejor se adapte a sus necesidades y
            proceder al checkout a través de la integración de la{" "}
            <b>API de Mercado Pago</b>.
            <br />
            <br />
            Una vez completado el proceso de pago, los clientes tienen la opción
            de ponerse en contacto directo con el dueño del sitio. Esto permite
            una comunicación directa para asegurar que los detalles específicos
            del plan de entrenamiento se adapten perfectamente a las metas
            individuales.
            <br />
            <br />
            Destacando la seguridad y la simplicidad, esta web no solo
            proporciona una plataforma de compra segura a través de Mercado
            Pago, sino que también facilita la conexión directa entre el
            entrenador y sus clientes. Un proyecto diseñado para la eficiencia y
            la personalización en el mundo del fitness personalizado.
          </p>
        )}
        {/* {project?.title === "Tienda Online" && (
          <p className="text-center md:w-[80%] md:m-auto">
            Mi primer proyecto Full-Stack representa la culminación de mi viaje
            en la programación, abordando tanto el desarrollo del backend como
            del frontend. Utilizando <b>NodeJS con ExpressJS</b> para el backend
            y <b>MongoDB como base de datos</b>, este proyecto encarna la
            filosofía de que <b>querer es poder</b>.
            <br />
            <br />
            En el frontend, opté por <b>Next.js</b> para una experiencia de
            usuario fluida, complementado con <b>TailwindCSS</b> para un diseño
            moderno y ágil. La tienda online presenta una variedad de productos,
            desde indumentaria hasta accesorios y zapatillas, ofreciendo a los
            usuarios una experiencia de compra completa.
            <br />
            <br />
            La funcionalidad de usuario se amplía con la posibilidad de crear
            cuentas y cargar fotos de perfil. Para gestionar las imágenes,
            integré <b>Cloudinary en el backend</b>, permitiendo la carga y
            consumo eficiente de imágenes desde el frontend.
            <br />
            <br />
            La administración de productos se gestiona a través de un{" "}
            <b>panel construido con Material UI</b>, accesible solo para
            usuarios con el rol de administrador. Esta distinción de roles
            asegura un entorno seguro y permite que solo los administradores
            suban nuevos productos.
            <br />
            <br />
            Este proyecto no solo demuestra mis habilidades técnicas en
            Full-Stack development, sino que también destaca la atención al
            detalle en la experiencia del usuario y la implementación de
            funciones avanzadas como la gestión de imágenes y la administración
            de roles.
          </p>
        )} */}
        {project?.title === "Diario El Heraldo | de Concordia" && (
          <p>
            Tengo el placer de presentar el proyecto de creación desde cero de
            un <b>diario digital para Zaro Estudio Creativo</b>, donde asumí el
            papel principal en la{" "}
            <b>implementación de la interfaz de usuario utilizando Next.js</b>.
            Mi enfoque se centró en consumir eficientemente los endpoints
            proporcionados por el backend para presentar contenido dinámico en
            el diario.
            <br />
            <br />
            Opté por utilizar Next.js para aprovechar su potencia en la
            construcción de aplicaciones web rápidas y eficientes, garantizando
            una experiencia de usuario fluida y receptiva. Y utilice la
            versatilidad de Tailwind CSS para diseñar los estilos del diario,
            logrando una apariencia moderna y atractiva. Esta elección permitió
            una personalización eficiente y una gestión sencilla de los estilos.
            <br />
            <br />
            Este proyecto no solo resalta mi{" "}
            <b>capacidad técnica en el desarrollo con Next.js y Tailwind CSS</b>
            , sino también{" "}
            <b>
              mi habilidad para trabajar en equipo, adaptarme a los requisitos
              específicos del cliente y entregar resultados de alta calidad.
            </b>{" "}
            La experiencia adquirida en este proyecto ha fortalecido mi
            confianza en abordar desafíos complejos y ha mejorado mi capacidad
            para ofrecer soluciones efectivas en entornos de desarrollo
            colaborativo.
          </p>
        )}
        {project?.title === "Ángeles Callejeros" && (
          <p>
            Me complace compartir mi contribución como desarrollador frontend en
            un proyecto clave después de completar dos bootcamps. Utilicé{" "}
            <b>Next.js</b> para mejorar la presencia digital de una{" "}
            <b>ONG de niños</b>, centrándome en un{" "}
            <b>diseño intuitivo y accesible</b>.
            <br />
            <br />
            <b>Integre exitosamente de la API de Mercado Pago </b>para recibir
            donaciones de manera segura y diversificada, ademas de tener un
            <b>diseño responsivo y experiencia de usuario optimizada </b>para
            una navegación intuitiva y me concentré en una contribución
            significativa al aumento de la visibilidad en línea y la recaudación
            de fondos para la ONG.
            <br />
            <br />
            Este proyecto marcó una etapa clave en mi carrera, destacando mi
            capacidad para aplicar habilidades técnicas en proyectos con impacto
            social positivo
          </p>
        )}
        <div className="flex items-center justify-center gap-8">
          <div className={`${styles.button_borders}`}>
            <button className={styles.primary_button}>
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

          <div className={`${styles.button_borders}`}>
            <button className={styles.primary_button}>
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
