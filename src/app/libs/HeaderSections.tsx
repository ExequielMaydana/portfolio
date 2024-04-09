import Link from "next/link";
import React from "react";
 interface header  {
  title: string, subtitle?: string

}

export default function HeaderSections(Props: header) {
  const { title, subtitle } = Props;

  return (
    <header className="w-full flex items-center justify-between">
      <h2 className="text-3xl font-bold text-black lg:text-5xl">{title}</h2>
      <Link href="/proyectos" className="hidden font-bold text-black lg:block lg:text-2xl">{subtitle}</Link>
    </header>
  );
}
