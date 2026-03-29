# 📝 GUÍA PARA EDITAR BLOGS AUTÓNOMAMENTE

## 🎯 ¿Qué tienes que hacer?

### 1. ✅ Crear un Nuevo Blog
```bash
# Ve a la carpeta:
/src/content/blogs/

# Crea un nuevo archivo .md:
touch nuevo-blog.md
```

### 2. ✅ Usa la Plantilla
Copia y pega este contenido en tu archivo:

```markdown
---
title: "Título de tu Blog"
category: "Penal"  # Penal, Civil, o Extranjería
date: "26 Mar 2026"
author: "Dextra Law Firm"
readTime: "5 min lectura"
tags: ["tag1", "tag2", "tag3"]
---

# Título del Blog

## Introducción

Escribe aquí tu contenido...

## Sección Principal

Tu contenido principal aquí...

**Texto importante**

- Lista punto 1
- Lista punto 2

## Conclusión

Tu conclusión aquí...
```

### 3. ✅ Formato Markdown Básico

```markdown
# Título Principal
## Subtítulo
### Sub-subtítulo

**Texto en negrita**
*Texto en cursiva*

- Lista con viñetas
- Otro punto

1. Lista numerada
2. Segundo punto

> Cita importante

[Enlace](http://ejemplo.com)
```

### 4. ✅ Publicar el Blog

1. **Guarda el archivo** con extensión `.md`
2. **El nombre del archivo** será la URL: `titulo-del-blog.md`
3. **Recarga la web** y aparecerá automáticamente

## 📂 Estructura de Archivos

```
/src/content/blogs/
├── plantilla-ejemplo.md      # Plantilla para copiar
├── que-hacer-si-te-detienen.md  # Blog de detención
├── como-reclamar-deuda.md    # Blog de deudas
└── tu-nuevo-blog.md          # Tu nuevo blog
```

## 🎨 Campos del Front Matter

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| title | Título del blog | "¿Qué hacer si te detienen?" |
| category | Categoría | "Penal", "Civil", "Extranjería" |
| date | Fecha | "26 Mar 2026" |
| author | Autor | "Dextra Law Firm" |
| readTime | Tiempo de lectura | "5 min lectura" |
| tags | Tags para búsqueda | ["detención", "derechos"] |

## 🚀 Tips para Escribir

### ✅ Buenas Prácticas
- Usa títulos cortos y claros
- Escribe párrafos cortos
- Usa listas para puntos clave
- Negrita para lo más importante
- 3-7 tags por blog

### ❌ Errores Comunes
- No uses caracteres especiales en el nombre del archivo
- No dejes espacios en blanco al final de las líneas
- No olvides cerrar los ```markdown

## 📱 Editores Recomendados

### Gratuitos:
- **Typora** (Windows/Mac) - Visual y fácil
- **Obsidian** (Windows/Mac/Linux) - Potente
- **VS Code** - Con extensión Markdown

### Online:
- **Notion** - Exporta a Markdown
- **Google Docs** - Copia y pega

## 🔧 Si Algo Falla

### Problema: No aparece el blog
**Solución:** 
- Revisa que el archivo tenga extensión `.md`
- Verifica que el front matter esté correcto
- Recarga la web con Ctrl+F5

### Problema: Formato incorrecto
**Solución:**
- Revisa la sintaxis Markdown
- Usa la plantilla como referencia
- No uses caracteres especiales

## 📞 Soporte

Si tienes problemas:
1. Revisa esta guía
2. Usa la plantilla
3. Verifica el formato
4. Contacta si persiste el problema

---

## 🎯 RESUMEN RÁPIDO

1. **Crea archivo** `.md` en `/src/content/blogs/`
2. **Copia plantilla** y rellena contenido
3. **Guarda** y recarga la web
4. **¡Listo!** Tu blog aparece automáticamente

¡Así de fácil! 🚀
