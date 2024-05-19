"use client";
import React from "react";
import { IoIosSearch, IoIosPhonePortrait } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import Image from "next/image";

interface data {
  id: number;
  slug: string;
  title: string;
  description: string;
  img: string;
}

export default function Card(Props: { data: data }) {
  const { data } = Props;

  return (
    <article className="w-full flex flex-col items-center justify-center md:flex-row-reverse">
      <figure className="w-full h-[200px] sm:h-[250px] md:h-[300px] xl:h-[400px]">
        <Image
          width={1000}
          height={1000}
          src={data.img}
          alt=""
          className="w-full h-full object-contain"
        />
      </figure>
      <div className="flex flex-col items-center justify-center md:items-start md:w-[60%] lg:md:w-full">
        <div className="flex flex-col items-center gap-2 mb-2 md:items-start">
          {data.slug === "seo" && (
            <span className="text-[#ea580c] text-2xl lg:text-4xl">
              <IoIosSearch />
            </span>
          )}
          {data.slug === "responsive" && (
            <span className="text-[#5b21b6] text-2xl lg:text-4xl">
              <IoIosPhonePortrait />
            </span>
          )}
          {data.slug === "reusablecode" && (
            <span className="text-[#4338ca] text-2xl lg:text-4xl">
              <FaCode />
            </span>
          )}
          <h3 className="font-semibold lg:text-4xl lg:font-black">{data.title}</h3>
        </div>
        <p className="text-center text-black font-medium md:text-start lg:text-xl">
          {data.description}
        </p>
      </div>
    </article>
  );
}
