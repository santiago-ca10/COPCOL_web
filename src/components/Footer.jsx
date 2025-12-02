import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold text-white tracking-wider">
          <span className="text-yellow-500">COP</span>COL S.A.S
        </div>
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} COPCOL. Todos los derechos reservados.</p>
          <p className="mt-1">Construcción, Operaciones y Proyectos de Colombia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
