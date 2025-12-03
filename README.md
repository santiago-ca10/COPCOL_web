# 🚧 COPCOL – Sitio Web Corporativo  
Sitio web oficial de **Construcción, Operaciones y Proyectos de Colombia (COPCOL)**, desarrollado en **React + Vite** con diseño moderno, animaciones suaves y despliegue automatizado con **GitHub Pages**.

---

## 📌 Tecnologías Utilizadas

### 🖥️ **Frontend**
- **React 18**
- **Vite 5** (entorno de desarrollo rápido)
- **Tailwind CSS 3** (estilos utilitarios)
- **Lucide Icons** (iconografía moderna)
- **JavaScript (ES Modules)**

### 🎨 **UI / UX**
- Diseño responsivo (Mobile First)
- Componentes reutilizables
- Animaciones suaves
- Tipografía moderna y consistente
- Paleta corporativa basada en:
  - Amarillo (#FACC15)
  - Gris Slate
  - Blanco / Negro

### 🚀 **Deployment**
- **GitHub Pages**
- `gh-pages` npm package
- Build optimizado con Vite

---

## 📁 Estructura del Proyecto

COPCOL_web/
│── public/
│── src/
│ │── componentes/
│ │ │── Hero.jsx
│ │ │── Acerca.jsx
│ │ │── Servicios.jsx
│ │ │── Galería.jsx
│ │ │── Contacto.jsx
│ │ │── Aplicación.jsx
│ │ │── principal.jsx
│ │── assets/
│── index.html
│── package.json
│── vite.config.js
│── tailwind.config.js

yaml
Copiar código

---

## ⚙️ Configuración para desarrollo

### 📥 1. Clonar el repositorio

```bash
git clone https://github.com/santiago-ca10/COPCOL_web.git
cd COPCOL_web
📦 2. Instalar dependencias
bash
Copiar código
npm install
🧪 3. Ejecutar en modo desarrollo
bash
Copiar código
npm run dev
🚀 Deploy en GitHub Pages
El proyecto está configurado para desplegarse automáticamente usando:

"homepage" en package.json

"base": "/COPCOL_web/" en vite.config.js

Script de despliegue en package.json:

json
Copiar código
"deploy": "gh-pages -d dist"
🛠 Pasos para publicar
bash
Copiar código
npm run build
npm run deploy
🌐 Sitio en producción
👉 https://santiago-ca10.github.io/COPCOL_web/

[![Ver sitio](https://img.shields.io/badge/🌐%20Visitar%20Sitio-COPCOL-blue)](https://santiago-ca10.github.io/COPCOL_web/)
