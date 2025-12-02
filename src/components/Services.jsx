import React from 'react';
import { Hammer, Zap, PaintBucket, HardHat, Activity, Truck, ChevronRight } from 'lucide-react';
import g1 from '../assets/g1.jpeg';
import g6 from '../assets/g6.jpeg';
import g7 from '../assets/g7.jpeg';
import g8 from '../assets/g8.jpeg';
import g9 from '../assets/g9.jpeg';
import g10 from '../assets/g10.jpeg';


const Services = () => {
  const services = [
  {
    icon: <Hammer size={40} />,
    title: "Fabricación y Mecánica",
    description: "Fabricación y montaje de estructuras metálicas...",
    image: g1
  },
  {
    icon: <Zap size={40} />,
    title: "Electricidad Industrial",
    description: "Diseño, ingeniería y construcción de sistemas eléctricos...",
    image: g6
  },
  {
    icon: <PaintBucket size={40} />,
    title: "Sandblasting y Pintura",
    description: "Preparación de superficies...",
    image: g7
  },
  {
    icon: <HardHat size={40} />,
    title: "Obras Civiles",
    description: "Diseño y construcción civil...",
    image: g8
  },
  {
    icon: <Activity size={40} />,
    title: "Instrumentación",
    description: "Automatización de procesos...",
    image: g9
  },
  {
    icon: <Truck size={40} />,
    title: "Alquileres y Suministros",
    description: "Alquiler de maquinaria...",
    image: g10
  }
  ];


  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-yellow-600 font-bold uppercase tracking-wider mb-2">Nuestro Portafolio</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Soluciones Integrales</h3>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                <div className="absolute bottom-4 right-4 bg-yellow-500 p-3 rounded-full text-slate-900 shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                <a href="#contact" className="inline-flex items-center text-yellow-600 font-bold hover:text-yellow-700 text-sm">
                  Solicitar servicio <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;