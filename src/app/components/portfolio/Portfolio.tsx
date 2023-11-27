"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { dataPortfolio } from "./dataPortfolio";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/portfolio.module.css";
import HeaderSections from "@/app/libs/HeaderSections";
export default function Portfolio() {
  return (
    <section
      className="w-full flex flex-col gap-12 p-4 lg:p-12 mb-12"
      id="portfolio"
    >
      <HeaderSections title="Algunos trabajos" />
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
        {dataPortfolio.map((data) => (
          <SwiperSlide key={data.id}>
            <Link href={`/proyectos/${data.slug}`}>
              <figure className="w-full h-full relative">
                <Image
                  width={600}
                  height={600}
                  src={data.imgUrl}
                  alt="imagen proyecto"
                  className="w-full h-full object-cover rounded-md imgShadow"
                />
                <button className={styles.btn_card}>
                  <b>Ver más</b>
                </button>
              </figure>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
