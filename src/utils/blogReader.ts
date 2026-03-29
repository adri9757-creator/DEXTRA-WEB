// Lector de archivos Markdown para blogs
export interface BlogPost {
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  content: string;
  slug: string;
  excerpt: string;
}

export function parseMarkdownFile(content: string, filename: string): BlogPost {
  const lines = content.split('\n');
  let frontMatter = {};
  let markdownContent = '';
  let inFrontMatter = false;
  
  // Parse front matter (metadata entre ---)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line === '---' && i === 0) {
      inFrontMatter = true;
      continue;
    }
    
    if (line === '---' && inFrontMatter) {
      inFrontMatter = false;
      markdownContent = lines.slice(i + 1).join('\n');
      break;
    }
    
    if (inFrontMatter && line.includes(':')) {
      const [key, ...valueParts] = line.split(':');
      const value = valueParts.join(':').trim().replace(/"/g, '');
      frontMatter[key.trim()] = value;
    }
  }
  
  // Si no hay front matter, usar valores por defecto
  if (!inFrontMatter && Object.keys(frontMatter).length === 0) {
    markdownContent = content;
    frontMatter = {
      title: filename.replace('.md', ''),
      category: 'Civil',
      date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
      author: 'Dextra Law Firm',
      readTime: '3 min lectura',
      tags: ['blog']
    };
  }
  
  // Generar slug
  const slug = `/blog/${filename.replace('.md', '').toLowerCase().replace(/\s+/g, '-')}`;
  
  // Generar excerpt (primeros 150 caracteres)
  const plainText = markdownContent.replace(/[#*`]/g, '').replace(/\n/g, ' ').trim();
  const excerpt = plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;
  
  return {
    title: frontMatter.title || filename.replace('.md', ''),
    category: frontMatter.category || 'Civil',
    date: frontMatter.date || new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
    author: frontMatter.author || 'Dextra Law Firm',
    readTime: frontMatter.readTime || '3 min lectura',
    tags: Array.isArray(frontMatter.tags) ? frontMatter.tags : (frontMatter.tags ? frontMatter.tags.split(',').map(t => t.trim()) : ['blog']),
    content: markdownContent,
    slug: slug,
    excerpt: excerpt
  };
}

export function getAllBlogPosts(): BlogPost[] {
  // Esta función leerá todos los archivos .md de la carpeta blogs
  // Por ahora devuelve un array vacío
  return [];
}
