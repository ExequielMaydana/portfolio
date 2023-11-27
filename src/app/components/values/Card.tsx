"use client";
import React from "react";
import { IoIosSearch, IoIosPhonePortrait } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import styles from "../../styles/values.module.css";
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
    <article className={styles.cardValues}>
      <figure className="w-full h-[200px]">
        <Image
          width={1000}
          height={1000}
          src={data.img}
          alt=""
          className="w-full h-full object-contain"
        />
      </figure>
      <header className="w-full flex flex-col items-start justify-center gap-2 mb-2">
        {data.slug === "seo" && (
          <span className="text-[#ea580c] text-2xl">
            <IoIosSearch />
          </span>
        )}
        {data.slug === "responsive" && (
          <span className="text-[#5b21b6] text-2xl">
            <IoIosPhonePortrait />
          </span>
        )}
        {data.slug === "reusablecode" && (
          <span className="text-[#4338ca] text-2xl">
            <FaCode />
          </span>
        )}
        <h3 className="font-semibold">{data.title}</h3>
      </header>
      <div className="w-full sm:text-center">
        <p>{data.description}</p>
      </div>
    </article>
  );
}
