export const posts = [
  { category: "Penal", title: "¿Qué hacer si te detienen en Valencia?", excerpt: "Guía completa sobre tus derechos y los plazos legales si eres detenido en Valencia en 2026.", date: "28 Mar 2026", slug: "/blog/que-hacer-si-te-detienen-valencia", author: "Dextra Law Firm", readTime: "8 min lectura", tags: ["detención", "valencia", "derechos", "penal", "guía"] },
  { category: "Civil", title: "Cómo reclamar una deuda: guía paso a paso", excerpt: "Todo lo que necesitas saber para recuperar el dinero que te deben de forma rápida y efectiva.", date: "26 Mar 2026", slug: "/blog/como-reclamar-una-deuda", author: "Dextra Law Firm", readTime: "6 min lectura", tags: ["deuda", "reclamación", "civil", "guía", "paso a paso"] },
  { category: "Extranjería", title: "Guía completa de residencia en España 2026", excerpt: "Tipos de residencia, requisitos y plazos actualizados para este año.", date: "5 Mar 2026", slug: "#", author: "Dextra Law Firm", readTime: "5 min lectura", tags: ["extranjería", "residencia", "españa 2026"] },
  { category: "Penal", title: "Diferencias entre delito leve y delito grave", excerpt: "Entender la clasificación de los delitos te ayuda a conocer las consecuencias reales.", date: "28 Feb 2026", slug: "#", author: "Dextra Law Firm", readTime: "3 min lectura", tags: ["penal", "delitos", "clasificación"] },
  { category: "Extranjería", title: "Arraigo social 2026: requisitos actualizados", excerpt: "Los requisitos del arraigo social han cambiado. Te explicamos lo que necesitas.", date: "20 Feb 2026", slug: "#", author: "Dextra Law Firm", readTime: "4 min lectura", tags: ["extranjería", "arraigo", "2026"] },
  { category: "Civil", title: "¿Puedo reclamar sin ir a juicio?", excerpt: "Alternativas al juicio para resolver conflictos civiles de forma más rápida y económica.", date: "15 Feb 2026", slug: "#", author: "Dextra Law Firm", readTime: "3 min lectura", tags: ["civil", "reclamación", "juicio"] },
];

// Función para filtrar posts por categoría
export const getPostsByCategory = (category: string) => {
  return posts.filter(post => post.category === category);
};

// Función para obtener posts recientes
export const getRecentPosts = (limit: number = 3) => {
  return posts.slice(0, limit);
};

// Función para buscar posts
export const searchPosts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return posts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
