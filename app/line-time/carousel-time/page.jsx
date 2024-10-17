"use client";
import { useContext } from "react";

import { useEffect } from "react";
import { ColorContext } from "@/app/ColorContext";
import { useThemeColor } from "@/app/ThemeColorContext";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Page() {

    const { color } = useContext(ColorContext);
    const setThemeColor = useThemeColor();
    const router = useRouter();
  
    useEffect(() => {
      setThemeColor(color); // Cambia este color según la pantalla
    }, [setThemeColor, color]);
  

    return (
        <div className="w-full h-full " style={{ backgroundColor: color }}>
HOLA
        </div>
    )

}