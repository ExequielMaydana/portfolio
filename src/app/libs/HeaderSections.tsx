import React from "react";

export default function HeaderSections(Props: { title: string }) {
  const { title } = Props;

  return (
    <header className="w-full">
      <h2 className="text-3xl font-bold text-black lg:text-5xl">{title}</h2>
    </header>
  );
}
