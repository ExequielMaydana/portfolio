"use client";

import HeaderSections from "@/app/libs/HeaderSections";
import { dataValues } from "./dataValues";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export default function Values() {
  return (
    <section className="w-full flex flex-col p-4 lg:p-12 mb-12">
      <HeaderSections title="¿POR QUÉ DEBERÍA CONTRATARME?" />
      <p className="font-medium text-black mt-2 mb-4 md:w-[80%] md:text-xl md:mb-6 lg:w-[70%]">
        Cuando construyo o clono proyectos web, me adhiero firmemente a estos
        principios que hacen que mis sitios web sean únicos y escalables.
      </p>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiperValues"
      >
        {dataValues.map(data => (
          <SwiperSlide key={data.id} className="w-full flex items-end justify-end">     <Card data={data} /></SwiperSlide>

        ))}



      </Swiper>
    </section>
  );
}
