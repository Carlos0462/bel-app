"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useThemeColor } from "./ThemeColorContext";

export default function Page() {
  const setThemeColor = useThemeColor();
  const [overlayImage, setOverlayImage] = useState(null);
  const [isExiting, setIsExiting] = useState(false);
  const [pendingImage, setPendingImage] = useState(null);

  useEffect(() => {
    setThemeColor("#C2D5F0"); // Cambia este color según la pantalla

  }, [setThemeColor]);

  useEffect(() => {
    if (overlayImage && pendingImage) {
      // Espera un breve período para que el overlay se muestre antes de disparar la alerta
      const timer = setTimeout(() => {
        const userConfirmed = window.confirm(pendingImage.question);
        if (!userConfirmed) {
          setOverlayImage(null);
        }
        setPendingImage(null);
      }, 300); // Duración del retardo para que se muestre el overlay antes de la alerta

      return () => clearTimeout(timer); // Limpia el timeout si el componente se desmonta
    }
  }, [overlayImage, pendingImage]);

  const handleImageClick = (imageData) => {
    if (overlayImage) {
      setIsExiting(true);
      setTimeout(() => {
        setIsExiting(false);
        setOverlayImage(imageData);
        setPendingImage(imageData);
      }, 300); // Duración de la animación de salida
    } else {
      setOverlayImage(imageData);
      setPendingImage(imageData);
    }
  };

  const handleOverlayClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      setOverlayImage(null);
      setIsExiting(false);
    }, 300); // Duración de la animación de salida
  };

  const images = [
    {
      src: "/images/TaylorSwift.svg",
      title: "Taylor Swift",
      description: "Se elegirá tus colores en base a tu elección",
      question: "¿Quieres elegir a Taylor Swift?",
    },
    {
      src: "/images/Ferxxo.svg",
      title: "Ferxxo",
      description: "Se elegirá tus colores en base a tu elección",
      question: "¿Quieres elegir a Ferxxo?",
    },
  ];

  return (
    <div className="w-full h-full flex flex-row">
      {images.map((image, index) => (
        <div key={index} className="w-1/2 h-full relative">
          <Image
            src={image.src}
            alt={image.title}
            layout="fill"
            objectFit="cover"
            className="cursor-pointer"
            onClick={() => handleImageClick(image)}
          />
        </div>
      ))}
      {overlayImage && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
            isExiting ? "animate-fade-out" : "animate-fade-in"
          }`}
          onClick={handleOverlayClick}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center text-white p-4">
            <div className="relative w-full h-full">
              <Image
                src={overlayImage.src}
                alt="Overlay"
                layout="fill"
                objectFit="contain"
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}