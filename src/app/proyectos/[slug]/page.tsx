"use client";
import React from "react";
import { dataPortfolio } from "@/app/components/portfolio/dataPortfolio";
import CardDescriptionProyect from "@/app/components/portfolio/CardDescriptionProyect";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

export default function ProjectById({ params }: { params: { slug: string } }) {
  const decodedSlug = decodeURIComponent(params.slug);
  const project = dataPortfolio.find((project) => project.slug === decodedSlug);
  const projectSimil = dataPortfolio.filter(e => e.type === project?.type && e.title !== project.title)
    
  return (
    <section className="w-full flex flex-col min-h-screen p-4 gap-8 md:px-8 lg:p-12">
      <header className="w-full flex flex-col xl:pb-8">
        <div className="flex items-center justify-start gap-2 text-sm md:text-base">
          <Link href="/" className="text-[#6366f1]">
            Inicio
          </Link>
          <span className="text-gray6 font-semibold">/</span>{" "}
          <p className="text-gray4">Proyectos</p>{" "}
          <span className="text-gray6 font-semibold">/</span>{" "}
          <p className="text-black font-medium">{project?.title}</p>
        </div>
        <p className="text-gray4 font-medium"
        >Tipo: <span className="text-black ">{project?.type}</span></p>
      </header>

      <div className="w-full flex flex-col gap-12 md:gap-20 mb-[8em]">
        <CardDescriptionProyect project={project} />
        <div className="w-full flex flex-col gap-12 mb-12"
        >
          <h3 className="text-2xl font-semibold uppercase ">Proyectos del mismo tipo</h3>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="swiperPortfolio"
          >
            {projectSimil.map((data) => (
              <SwiperSlide key={data.id}>
                <Link href={`/proyectos/${data.slug}`}>
                  <figure className="w-full h-full relative">

                    {data.imgUrl === "" ? <div className="w-full h-full object-cover rounded-md imgShadow"
                    >
                      <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                        <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                          <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                          </svg>
                        </div>
                      </div>
                    </div> : <Image
                      width={600}
                      height={600}
                      src={data.imgUrl}
                      priority
                      alt="imagen proyecto"
                      className="w-full h-full object-cover rounded-md imgShadow"
                    />}
                    <button className="btn_card">
                      <b>Ver</b>
                    </button>
                  </figure>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
