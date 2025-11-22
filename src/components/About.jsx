import React from "react";
import { translations } from "../data/translations";

export default function About({ lang }){
  return(
    <section id="about" className="py-20 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-primary mb-4">{translations[lang].aboutTitle}</h2>
      <p>{translations[lang].aboutMe}</p>
    </section>
  );
}
