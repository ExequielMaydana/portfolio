"use client";
import React from "react";
import { dataPortfolio } from "@/app/components/portfolio/dataPortfolio";
import CardDescriptionProyect from "@/app/components/portfolio/CardDescriptionProyect";

export default function ProjectById({ params }: { params: { slug: string } }) {
  const project = dataPortfolio.find((project) => project.slug === params.slug);

  return (
    <section className="w-full flex flex-col p-4 gap-8 lg:p-12">
      <header className="w-full xl:pb-8">
        <div className="flex items-center justify-start gap-2 text-sm md:text-base">
          <p className="text-slateGray">Proyectos</p>{" "}
          <span className="text-dimGray font-semibold">/</span>{" "}
          <p className="text-black font-medium">{project?.title}</p>
        </div>
      </header>

      <CardDescriptionProyect project={project} />
    </section>
  );
}
