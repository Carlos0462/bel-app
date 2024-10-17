"use client";
import React, { useContext, useEffect } from "react";
import { ColorContext } from "@/app/ColorContext";
import { useThemeColor } from "@/app/ThemeColorContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const { color } = useContext(ColorContext);
  const setThemeColor = useThemeColor();

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/line-time/carousel-time'); // Redirige a la página deseada
    }, 10000); // Espera 3 segundos antes de redirigir

    return () => clearTimeout(timer); // Limpia el timeout si el componente se desmonta
  }, [router]);

  useEffect(() => {
    setThemeColor("#DAEBED"); // Cambia el color del tema según la pantalla
  }, [setThemeColor]);

  return (
    <div
      className="flex flex-col w-full h-full  items-center p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Bel.jpg')" }}
    >
      <div className="gap-6 bg-black bg-opacity-50 p-6 rounded-lg shadow-lg text-center max-w-lg">
        <div className="font-bold text-[1.8rem] text-white leading-snug drop-shadow-lg">
          Feliz cumpleaños a mi mejor amiga. La más naca de las nacas. Mi real,
          mi bff 🎉🎂🎈❤️
        </div>
      </div>
    </div>
  );
}
