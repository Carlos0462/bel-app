"use client";
import { useContext } from "react";
import { ColorContext } from "../ColorContext";
import { useEffect } from "react";
import { useThemeColor } from "../ThemeColorContext";
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

        </div>
    )

}