import HeaderSections from "@/app/libs/HeaderSections";
import { dataValues } from "./dataValues";
import Card from "./Card";
export default function Values() {
  return (
    <section className="w-full flex flex-col p-4 lg:p-12 mb-12">
      <HeaderSections title="¿POR QUÉ DEBERÍA CONTRATARME?" />
      <p className="font-medium text-black mt-2 mb-4 text-center md:w-[80%] md:text-xl md:text-center md:mb-6 lg:text-center">
        Cuando construyo o clono proyectos web, me adhiero firmemente a estos
        principios que hacen que mis sitios web sean únicos y escalables.
      </p>
      <article className="w-full flex flex-wrap items-center justify-center gap-6 lg:gap-16">
        {dataValues.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </article>
    </section>
  );
}
