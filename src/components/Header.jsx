import React from "react";

export default function Header({ theme, setTheme, lang, setLang }) {
  return (
    <header className="
      fixed top-0 w-full z-50 
      bg-white/60 dark:bg-black/40 
      backdrop-blur-xl shadow-sm
    ">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-primary tracking-tight">
          Sıla Gedik
        </div>

        {/* Right side: language + theme */}
        <div className="flex items-center gap-4">

          {/* Language Toggle */}
          <div className="flex items-center gap-2 px-3 py-1 
            rounded-full bg-white/80 dark:bg-black/40 
            shadow-md border border-gray-200 dark:border-gray-700
          ">
            <button 
              onClick={() => setLang("tr")}
              className={`
                text-sm px-2 py-1 rounded 
                transition 
                ${lang==="tr" 
                  ? "font-bold text-indigo-600 dark:text-indigo-300" 
                  : "text-gray-600 dark:text-gray-300"
                }
              `}
            >
              TR
            </button>

            <span className="text-gray-400">|</span>

            <button 
              onClick={() => setLang("en")}
              className={`
                text-sm px-2 py-1 rounded transition
                ${lang==="en" 
                  ? "font-bold text-indigo-600 dark:text-indigo-300" 
                  : "text-gray-600 dark:text-gray-300"
                }
              `}
            >
              EN
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="
              px-4 py-1 rounded-full text-sm
              bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600
              shadow-md transition
            "
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>

        </div>

      </div>
    </header>
  );
}
