import React from 'react';

// Importa tus imágenes desde assets
import g2 from "../assets/g2.jpeg";
import g3 from "../assets/g3.jpeg";
import g4 from "../assets/g4.jpeg";
import g5 from "../assets/g5.jpeg";

const Gallery = () => {
  const images = [
    { src: g2, alt: "Grúa Hyundai COPCOL" },
    { src: g3, alt: "Tubería industrial" },
    { src: g4, alt: "Soldadura y Fabricación" },
    { src: g5, alt: "Tanques de almacenamiento" },
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Proyectos Recientes</h2>
            <p className="text-slate-400">Calidad en fabricación, sandblasting y obras civiles.</p>
          </div>
          <button className="hidden md:block border border-yellow-500 text-yellow-500 px-6 py-2 rounded hover:bg-yellow-500 hover:text-slate-900 transition-colors">
            Ver Todos
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="aspect-square relative group overflow-hidden rounded-lg cursor-pointer">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                <p className="font-bold text-white">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

