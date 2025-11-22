import { projects } from "../data/projects";
import React from "react";
import { translations } from "../data/translations";

export default function Projects({ lang }){
  return(
    <section id="projects" className="py-20 bg-gray-100 dark:bg-black/20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8">{translations[lang].projects}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*projects.map(p=>(
            <div key={p.id} className="bg-white dark:bg-black/40 p-4 rounded shadow hover:scale-[1.02] transition">
              <img src={p.image} className="rounded"/>
              <h3 className="text-xl mt-3">{p.title}</h3>
              <p className="text-sm opacity-80">{p.description}</p>
            </div>
          ))*/}
          {translations[lang].soon}
        </div>
      </div>
    </section>
  );
}
