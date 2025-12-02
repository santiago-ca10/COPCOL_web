import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImg from "../assets/hero.jpeg"; 

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg}  
          alt="Soldador industrial COPCOL" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          <span className="block text-yellow-500 text-lg sm:text-xl font-semibold mb-2 tracking-[0.2em]">DESDE 2021</span>
          Expertos en <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Fabricación y Montaje
          </span>
        </h1>
        <p className="mt-4 text-xl text-slate-300 max-w-2xl font-light">
          Especialistas en estructuras metálicas, electricidad industrial, sandblasting y proyectos de ingeniería para el sector Oil & Gas.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <a href="#services" className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-400 transition-all flex items-center justify-center gap-2">
            Nuestros Servicios <ArrowRight size={20} />
          </a>
          <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-all">
            Contáctanos
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
