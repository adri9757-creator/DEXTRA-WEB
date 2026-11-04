import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Search, Filter } from "lucide-react";
import { useState } from "react";
import { posts, getPostsByCategory, getRecentPosts, searchPosts } from "@/data/posts";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const POSTS_PER_PAGE = 6;
  
  // Filtrar posts según búsqueda y categoría (mostrar todos, pero diferenciar)
  let filteredPosts = posts;
  
  if (searchQuery) {
    filteredPosts = searchPosts(searchQuery);
  } else if (selectedCategory) {
    filteredPosts = getPostsByCategory(selectedCategory);
  }
  
  // Paginación
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  
  const categories = ["Penal", "Civil", "Extranjería"];
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publicaciones</h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground font-sans text-lg mx-auto text-center max-w-2xl">
            Información práctica y actualizada sobre derecho penal, derecho de extranjería y derecho civil.
          </p>
          
          {/* Enhanced Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative group">
              <Search aria-hidden="true" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <label htmlFor="buscar-articulos" className="sr-only">Buscar artículos</label>
              <input
                id="buscar-articulos"
                type="search"
                placeholder="Buscar artículos por título, contenido o etiquetas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-center"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-muted-foreground hover:text-primary transition-colors p-1 rounded-md hover:bg-secondary/80"
                  aria-label="Limpiar búsqueda"
                >
                  ×
                </button>
              )}
            </div>
            
            {/* Search Results Info */}
            {searchQuery && (
              <div className="mt-4 text-center" role="status">
                <p className="text-sm text-muted-foreground font-sans">
                  {paginatedPosts.length > 0 
                    ? `Se encontraron ${paginatedPosts.length} resultados para "${searchQuery}"`
                    : `No se encontraron resultados para "${searchQuery}"`
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <Section>
        <div className="flex flex-wrap justify-center gap-3 mb-3">
          <button
            type="button"
            aria-pressed={selectedCategory === null}
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-sans transition-colors ${
              selectedCategory === null 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              aria-pressed={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-sans transition-colors ${
                selectedCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Posts Grid */}
      <div className="container pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post, i) => (
            <article key={i} className={`group border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${post.slug === "#" ? "[&_img]:grayscale" : ""}`}>
              <div className="h-48 bg-muted flex items-center justify-center flex-shrink-0 relative">
                <img
                  src={post.image}
                  alt=""
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  {post.slug === "#" && (
                    <span className="inline-block bg-orange-100 text-orange-900 font-sans text-xs font-bold px-2 py-1 rounded-full">
                      PRÓXIMAMENTE
                    </span>
                  )}
                  <span className="inline-block bg-primary/10 text-primary-strong font-sans text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                  <span className="flex items-center gap-1 text-muted-foreground font-sans text-xs">
                    <Clock className="w-3 h-3" aria-hidden="true" /> <time>{post.date}</time>
                  </span>
                </div>
                <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed text-justify flex-grow">{post.excerpt}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Read More */}
                <div className="mt-auto pt-4">
                  {post.slug !== "#" ? (
                    <Link
                      to={post.slug}
                      className="inline-flex items-center gap-1 text-primary font-sans font-semibold text-sm group-hover:gap-2 transition-all"
                    >
                      Leer más <span className="sr-only">: {post.title}</span><ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-muted-foreground font-sans text-sm">
                      Próximamente <Clock className="w-4 h-4 ml-1" />
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>
            
            <span className="px-4 py-2 text-muted-foreground font-sans">
              Página {currentPage} de {totalPages}
            </span>
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
