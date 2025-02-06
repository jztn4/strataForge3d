"use client";

import { useEffect, useState } from "react";
import { Printer, Layers, Zap } from "lucide-react";

const icons = [Printer, Layers, Zap];

export default function Hero() {
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const Icon = icons[currentIcon];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-200 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-center opacity-75"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-orange-500 p-4 animate-bounce">
            <Icon size={48} />
          </div>
        </div>
        <h1
          className="text-7xl sm:text-5xl md:text-7xl font-bold mb-4 animate-fade-in"
          style={{
            textShadow: "0 0 10px rgba(0, 0, 0, 1), 0 0 25px rgba(0, 0, 0, 1)",
          }}
        >
          StrataForge 3D
        </h1>
        <p
          className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-delay"
          style={{
            textShadow: "0 0 2px rgba(0, 0, 0, 1), 0 0 5px rgba(0, 0, 0, 1)",
          }}
        >
          Custom 3D Printing & Design Solutions
        </p>
        <a
          href="https://www.instagram.com/strataforge3d/"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-delay-2"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
