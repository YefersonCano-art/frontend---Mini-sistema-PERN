# Guía de Despliegue en Vercel

## Pasos para desplegar:

### 1. Preparar el repositorio

```bash
git add .
git commit -m "Configurar variables de entorno para producción"
git push
```

### 2. Ir a Vercel

- Ve a [vercel.com](https://vercel.com)
- Inicia sesión con tu cuenta de GitHub

### 3. Importar proyecto

- Click en "Add New..."
- Selecciona "Project"
- Importa tu repositorio de GitHub

### 4. Configurar el proyecto

Vercel detectará automáticamente que es un proyecto Vite. Verifica que:

- **Framework Preset:** Vite
- **Root Directory:** frontend (o déjalo en blanco si tu repo es solo el frontend)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### 5. Agregar Variables de Entorno

En la sección "Environment Variables", agrega:

- **Key:** `VITE_API_URL`
- **Value:** `https://backend-mini-sistema-pern-1.onrender.com/api/productos`

### 6. Deploy

- Click en "Deploy"
- Espera unos minutos
- ¡Listo! Vercel te dará una URL como: `tu-proyecto.vercel.app`

## Actualizaciones futuras

Cada vez que hagas `git push`, Vercel desplegará automáticamente los cambios.

## Notas importantes:

- ✅ `.env` y `.env.local` están en `.gitignore` (no se subirán a GitHub)
- ✅ `.env.production` se puede subir porque contiene URLs públicas
- ✅ En desarrollo local usa: `http://localhost:3000`
- ✅ En producción usa: `https://backend-mini-sistema-pern-1.onrender.com`
