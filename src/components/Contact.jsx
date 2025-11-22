import React from "react";
import { translations } from "../data/translations";

export default function Contact({ lang }){
  return(
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">{translations[lang].contactMe}</h2>
      
      <a href="mailto:slgedik42@gmail.com" className="mt-4 inline-block px-6 py-3 bg-primary text-white rounded">
        Email
      </a>
      <a
  href="https://www.linkedin.com/in/s%C4%B1la-gedik/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 ml-4 inline-block px-6 py-3 bg-primary text-white rounded"
>
  LinkedIn
</a>
<a
  href="https://github.com/slgedik"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 ml-4 inline-block px-6 py-3 bg-primary text-white rounded"
>
  Github
</a>

    </section>
  );
}
