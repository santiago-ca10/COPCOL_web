import React from 'react';
import { Activity, Zap } from 'lucide-react';
import aboutImg from "../assets/about.jpeg"; // <-- IMAGEN LOCAL

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Imagen */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-100 rounded-full -z-10"></div>

            <img 
              src={aboutImg}   // <-- AQUÍ SE USÓ TU IMAGEN
              alt="Ingenieros COPCOL" 
              className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
            />

            <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-4xl font-bold text-slate-900">2027</p>
              <p className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Visión de Liderazgo</p>
            </div>
          </div>
          
          {/* Texto */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-yellow-500 pl-4">
              ¿Quiénes Somos?
            </h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              Somos una organización especialista en servicios industriales. Desde 2021 brindamos un enlace unificado entre nuestros clientes y colaboradores para llevar a cabo proyectos de ingeniería, construcción, fabricación y mantenimiento integral.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-blue-900">
                    <Activity size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Misión</h3>
                  <p className="text-slate-600">
                    Entregar proyectos seguros, de calidad y en los tiempos establecidos. Fortalecemos vínculos comerciales enfocándonos en el mejoramiento continuo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-blue-900">
                    <Zap size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Visión 2027</h3>
                  <p className="text-slate-600">
                    Ser líderes en la industria mediante la innovación, priorizando el talento humano y contribuyendo al medio ambiente.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
