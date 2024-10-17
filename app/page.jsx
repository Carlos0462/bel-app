"use client";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [overlayImage, setOverlayImage] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  const handleImageClick = (src, title, description, question) => {
    const userConfirmed = window.confirm(question);
    if (userConfirmed) {
      if (overlayImage) {
        setIsExiting(true);
        setTimeout(() => {
          setOverlayImage({ src, title, description });
          setIsExiting(false);
        }, 300); // Duración de la animación de salida
      } else {
        setOverlayImage({ src, title, description });
      }
    }
  };

  const handleOverlayClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      setOverlayImage(null);
      setIsExiting(false);
    }, 300); // Duración de la animación de salida
  };

  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-1/2 h-full relative">
        <Image
          src="/images/TaylorSwift.svg"
          alt="TaylorSwift"
          layout="fill"
          objectFit="cover"
          className="cursor-pointer"
          onClick={() =>
            handleImageClick(
              "/images/TaylorSwift.svg",
              "Taylor Swift",
              "Se elegirá tus colores en base a tu elección",
              "¿Quieres elegir a Taylor Swift?"
            )
          }
        />
      </div>
      <div className="w-1/2 h-full relative">
        <Image
          src="/images/Ferxxo.svg"
          alt="Ferxxo"
          layout="fill"
          objectFit="cover"
          className="cursor-pointer"
          onClick={() =>
            handleImageClick(
              "/images/Ferxxo.svg",
              "Ferxxo",
              "Se elegirá tus colores en base a tu elección",
              "¿Quieres elegir a Ferxxo?"
            )
          }
        />
      </div>
      {overlayImage && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
            isExiting ? "animate-fade-out" : "animate-fade-in"
          }`}
          onClick={handleOverlayClick}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-3xl mb-4">{overlayImage.title}</h1>
            <p className="text-lg mb-8">{overlayImage.description}</p>
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
