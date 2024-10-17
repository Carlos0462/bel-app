"use client";
import { useContext } from "react";
import { ColorContext } from "../ColorContext";
import { useEffect } from "react";
import { useThemeColor } from "../ThemeColorContext";
import Image from "next/image";

export default function Page() {
  const { color } = useContext(ColorContext);
  const setThemeColor = useThemeColor();
  console.log(color);

  useEffect(() => {
    setThemeColor(color); // Cambia este color según la pantalla
  }, [setThemeColor, color]);

  return (
    <div
      className="w-full h-full grid grid-cols-2 grid-rows-3 gap-6 p-6 relative"
      style={{ backgroundColor: color }}
    >
      <div className="relative">
        <Image
          src="/images/Mabel.svg"
          alt="Image 1"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="relative">
        <Image
          src="/images/Maya.svg"
          alt="Image 2"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="relative">
        <Image
          src="/images/Taylor.svg"
          alt="Image 3"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="relative">
        <Image
          src="/images/Pepa.svg"
          alt="Image 3"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="relative">
        <Image
          src="/images/Felipa.svg"
          alt="Image 4"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="relative">
        <Image
          src="/images/Marie.svg"
          alt="Image 5"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ top: "-40%" }}
      >
        <div className="text-4xl text-white font-bold">Hola, Bel</div>
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ top: "-25%" }}
      >
        <Image src="/images/Gato_Pata.svg" alt="Logo" width={60} height={60} />
      </div>
    </div>
  );
}
