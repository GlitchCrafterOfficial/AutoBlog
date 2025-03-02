# Blog Personal

Este repositorio contiene mi blog personal construido con Astro, un moderno generador de sitios estáticos que ofrece excelente rendimiento y una gran experiencia de desarrollo.

## 📚 Contenido

El blog incluye artículos sobre investigaciones independientes sobre temas en general, como Matematicas, Programación, Inteligencia Artificial, entre un largo etc. La idea es ir haciendose diversas preguntas y responderlas. 

## 🔧 Tecnologías utilizadas
- Astro - Framework principal
- Markdown para el contenido de los posts
- CSS personalizado con enfoque en la experiencia de lectura


## 💻 Requisitos previos
- [https://nodejs.org/api/url.html](Node.js) (versión 16 o superior)
- [https://pnpm.io/](PNPM como gestor de paquetes)

## 📂 Estructura del proyecto

```sh
├── src/
│   ├── components/    # Componentes reutilizables
│   ├── data/          # Datos estructurados
│   ├── layouts/       # Plantillas de página
│   ├── pages/         # Rutas y páginas
│   ├── styles/        # Estilos CSS
│   └── utils/         # Utilidades y helpers
├── public/            # Activos estáticos
├── astro.config.mjs   # Configuración de Astro
└── tsconfig.json      # Configuración de TypeScript
```

## 📝 Cómo usar este proyecto como plantilla
Este repositorio está diseñado para servir como punto de partida para tu propio blog personal. Puedes personalizarlo fácilmente siguiendo estos pasos:

1. **Configuracion Inicial**

```sh
# Clonar el repositorio
git clone https://github.com/GlitchCrafterOfficial/glitchcrafter.github.io blog
cd blog

# Instalar dependencias
pnpm install

# Eliminar historial de git y comenzar desde cero
rm -rf .git
git init
git add .
git commit -m "Primer commit: Blog personal basado en super-blog"
```
2. **Personalización básica**
Modifica src/data/siteConfig.js con tu información personal:

Nombre del blog
Descripción
Enlaces sociales
Configuración de tema
Reemplaza los archivos en public:

favicon.ico con tu propio ícono
Logos e imágenes con tus propios recursos

3. Creación de contenido

Para crear un nuevo post:

1. Crea un nuevo archivo en src/pages/posts/tu-nuevo-post.md
2. Añade el siguiente frontmatter (encabezado) al inicio del archivo:

```md
---
layout: '../../layouts/BlogPostLayout.astro'
title: 'Título de tu artículo'
pubDate: 2025-03-02
description: 'Una breve descripción que capture la esencia de tu artículo'
author: 'Tu nombre'
image:
    url: '/images/tu-imagen-destacada.jpg'
    alt: 'Descripción de la imagen'
tags: ["tecnología", "programación", "web"]
---

Tu contenido va aquí. Puedes usar **Markdown** con todas sus características.


4. Personalización avanzada

1. Modifica los componentes en components para cambiar la apariencia
2. Ajusta los estilos en styles según tus preferencias
3. Personaliza los layouts en layouts para cambiar la estructura de las páginas

5. Atención 

Iré añadiendo más carácteristicas mientras sea necesario, por lo tanto, asegúrate de seguir el repositorio.

## ⚖️ Licencia 

Este proyecto está licenciado bajo la Licencia MIT - vea el archivo LICENSE para más detalles.

## 🤝 Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o realiza un pull request para sugerir cambios o mejoras.

# ❤️ Apoya mi trabajo

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/H2H2ITQJK)

Desarrollado con ❤️ por @GlitchCrafterOfficial

