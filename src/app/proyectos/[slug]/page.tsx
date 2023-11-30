"use client";
import React from "react";
import { dataPortfolio } from "@/app/components/portfolio/dataPortfolio";
import CardDescriptionProyect from "@/app/components/portfolio/CardDescriptionProyect";
import Link from "next/link";

export default function ProjectById({ params }: { params: { slug: string } }) {
  const project = dataPortfolio.find((project) => project.slug === params.slug);

  return (
    <section className="w-full flex flex-col p-4 gap-8 lg:p-12">
      <header className="w-full xl:pb-8">
        <div className="flex items-center justify-start gap-2 text-sm md:text-base">
          <Link href="/" className="text-[#6366f1]">
            Inicio
          </Link>
          <span className="text-gray6 font-semibold">/</span>{" "}
          <p className="text-gray4">Proyectos</p>{" "}
          <span className="text-gray6 font-semibold">/</span>{" "}
          <p className="text-black font-medium">{project?.title}</p>
        </div>
      </header>

      <CardDescriptionProyect project={project} />
    </section>
  );
}
