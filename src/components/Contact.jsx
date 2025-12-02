import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {

    // Validación: solo nombre / teléfono / mensaje obligatorios
    if (!form.nombre || !form.telefono || !form.mensaje) {
      setError(true);
      setTimeout(() => setError(false), 2500);
      return;
    }

    // Mostrar mensaje de éxito
    setSuccess(true);
    setError(false);

    // Limpiar formulario
    setForm({
      nombre: "",
      telefono: "",
      correo: "",
      servicio: "",
      mensaje: "",
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">

          {/* Info Side */}
          <div className="lg:w-5/12 p-10 bg-slate-800 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hablemos de tu proyecto</h2>
              <p className="text-slate-400 mb-8">
                Estamos listos para atender requerimientos en fabricación, electricidad y recubrimientos.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Llámanos</h3>
                    <p className="text-slate-300">322-293-7474</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Escríbenos</h3>
                    <p className="text-slate-300">gerencia@copcol.com.co</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Visítanos</h3>
                    <p className="text-slate-300">
                      KILÓMETRO 1, Monterrey, Casanare.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Horario</h3>
                    <p className="text-slate-300 text-sm">
                      Lun-Vie: 7am-12pm / 2pm-5pm <br /> Sáb: 7am-12pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Texto */}
            <div className="mt-12">
              <a
                href="https://wa.me/573222937474"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-slate-900 font-bold px-4 py-2 rounded-lg hover:bg-green-400 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 p-10 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nombre *</label>
                  <input 
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono *</label>
                  <input 
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50"
                    placeholder="300 000 0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Correo</label>
                <input 
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50"
                  placeholder="ejemplo@empresa.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Servicio</label>
                <select
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50"
                >
                  <option value="">Seleccionar...</option>
                  <option>Fabricación / Mecánica</option>
                  <option>Electricidad</option>
                  <option>Sandblasting y Pintura</option>
                  <option>Civil</option>
                  <option>Instrumentación</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje *</label>
                <textarea
                  rows="4"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-600 font-semibold text-center">
                  Completa los campos obligatorios
                </p>
              )}

              {/* Éxito */}
              {success && (
                <p className="text-green-600 font-semibold text-center">
                  Mensaje enviado con éxito
                </p>
              )}

              <button 
                type="button"
                onClick={handleSubmit}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors shadow-lg"
              >
                Enviar Mensaje
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

