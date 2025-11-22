import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React from "react";

export default function App(){
  const [theme,setTheme]=useState(localStorage.getItem("theme")||"light");
  const [lang, setLang] = useState("tr"); // default dil TR

  useEffect(()=>{ 
    document.documentElement.classList.toggle("dark", theme==="dark");
    localStorage.setItem("theme",theme);
  },[theme]);

  return(
    <div className="transition bg-white dark:bg-darkbg min-h-screen text-gray-800 dark:text-gray-200">
      <Header theme={theme} setTheme={setTheme} lang={lang} setLang={setLang}/>
      <Hero lang={lang}/>
      <About lang={lang}/>
      <Projects lang={lang}/>
      <Contact lang={lang}/>
      <Footer lang={lang}/>
    </div>
  );
}
