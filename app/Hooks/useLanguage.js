"use client";

import { useEffect, useState } from "react";

export default function useLanguage() {
  const [lang, setLang] = useState("pt");

  // carrega idioma salvo no navegador
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  // troca idioma e salva
  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return {
    lang,
    setLang: changeLanguage,
  };
}