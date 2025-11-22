import { motion } from "framer-motion";
import React from "react";
import profilePhoto from "../img/silagedikfoto.jpeg";
import bgVideo from "../img/bgVideo.mp4";
import cvFile from "../img/Sila-Gedik-CV.pdf";  // ✔ CV import
import { translations } from "../data/translations";

export default function Hero({ lang }) {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">

      {/* ---- Background Video ---- */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[2px]"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Soft white overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

      {/* ---- PHOTO ---- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 mb-6"
      >
        <img
          src={profilePhoto}
          alt="Sıla Gedik"
          className="w-[300px] h-[300px] rounded-full object-cover shadow-2xl border-4 border-white/90"
        />
      </motion.div>

      {/* ---- CV BUTTON ---- */}
      <a
        href={cvFile}
        download
        className="relative z-20 mb-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition"
      >
        📄 {translations[lang].downloadCV}
      </a>

      {/* ---- HEADLINE ---- */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
      >
        {translations[lang].hello}
      </motion.h1>

      {/* ---- NAME ---- */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-20 mt-3 text-xl font-semibold text-gray-800"
      >
       {translations[lang].name}
      </motion.p>

      {/* ---- TAGLINE ---- */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative z-20 mt-4 text-lg max-w-xl mx-auto text-gray-700"
      >
{translations[lang].tagline}
      </motion.p>
    </section>
  );
}
