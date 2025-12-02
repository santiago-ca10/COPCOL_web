import React, { useState } from "react";
import {
  Hammer,
  Zap,
  PaintBucket,
  HardHat,
  Activity,
  Truck,
  ChevronRight,
  X,
} from "lucide-react";

import g1 from "../assets/g1.jpeg";
import g6 from "../assets/g6.jpeg";
import g7 from "../assets/g7.jpeg";
import g8 from "../assets/g8.jpeg";
import g9 from "../assets/g9.jpeg";
import g10 from "../assets/g10.jpeg";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <Hammer size={40} />,
      title: "OBRAS MECÁNICAS",
      description: "Construcción y mantenimiento mecánico industrial.",
      image: g1,
      details: [
        "Construcción de oleoductos y gaseoductos",
        "Montaje mecánico de facilidades de producción",
        "Mantenimiento de válvulas de proceso",
        "Precomisionamiento",
        "Comisionamiento",
        "Preservación de equipos mecánicos",
        "Construcción y montaje de estructuras metálicas",
      ],
    },
    {
      icon: <Zap size={40} />,
      title: "OBRAS ELÉCTRICAS Y HVAC",
      description: "Ingeniería y construcción de sistemas eléctricos y HVAC.",
      image: g6,
      details: [
        "Diseño e ingeniería de sistemas eléctricos/HVAC",
        "Precomisionamiento",
        "Comisionamiento",
        "Preservación de equipos eléctricos",
        "Iluminación LED",
        "Sistemas VRF",
        "Energía solar fotovoltaica",
        "Protección contra incendio",
        "Sistemas de seguridad electrónica",
      ],
    },
    {
      icon: <PaintBucket size={40} />,
      title: "SANDBLASTING Y PINTURA",
      description: "Tratamientos anticorrosivos industriales.",
      image: g7,
      details: [
        "Preparación de superficies",
        "Aplicación de recubrimientos",
        "Control de corrosión",
        "Protección de estructuras metálicas",
      ],
    },
    {
      icon: <HardHat size={40} />,
      title: "OBRAS CIVILES",
      description: "Construcción de obras civiles y edificaciones.",
      image: g8,
      details: [
        "Diseño y construcción civil",
        "Campamentos y edificaciones Steel Frame",
        "Precomisionamiento",
      ],
    },
    {
      icon: <Activity size={40} />,
      title: "INSTRUMENTACIÓN",
      description: "Automatización y control industrial.",
      image: g9,
      details: [
        "Automatización de procesos",
        "Programación PLC",
        "Sistema SCADA",
        "Interfaces HMI",
        "Laboratorio de calibración",
        "Pruebas de válvulas de seguridad",
        "Medición de flujo por ultrasonido",
        "Comisionamiento y precomisionamiento",
      ],
    },
    {
      icon: <Truck size={40} />,
      title: "ALQUILERES Y SUMINISTROS",
      description: "Suministro de maquinaria y logística.",
      image: g10,
      details: [
        "Alquiler de maquinaria y herramientas",
        "Inventario y catalogación de activos",
        "Control de bodegas",
        "Gestión de compras",
        "Suministro de personal",
      ],
    },
  ];

  return (
    <>
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-yellow-600 font-bold uppercase tracking-wider mb-2">
              Nuestro Portafolio
            </h2>
            <h3 className="text-4xl font-extrabold text-slate-900">
              Soluciones Integrales
            </h3>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(service)}
                className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute bottom-4 right-4 bg-yellow-500 p-3 rounded-full shadow-lg">
                    {service.icon}
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-yellow-600 font-semibold text-sm">
                    Ver más <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-2xl rounded-xl p-8 shadow-xl relative">

            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-slate-700 hover:text-black"
            >
              <X size={28} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="text-yellow-600">{selectedService.icon}</div>
              <h3 className="text-2xl font-bold">{selectedService.title}</h3>
            </div>

            <ul className="text-slate-700 space-y-2">
              {selectedService.details.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <ChevronRight size={16} className="text-yellow-500" />
                  {item}
                </li>
              ))}
            </ul>

          </div>
        </div>
      )}
    </>
  );
};

export default Services;
