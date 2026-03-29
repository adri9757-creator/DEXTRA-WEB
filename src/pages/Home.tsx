import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Users, Zap, Scale, Globe, FileText, ArrowRight, Phone, MessageCircle, CheckCircle } from "lucide-react";
import Section from "@/components/Section";
import { useState, useEffect } from "react";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Google My Business RSS Feed integration (FREE)
    const fetchGoogleReviews = async () => {
      try {
        // Google My Business RSS Feed for Dextra Law Firm
        const RSS_URL = "https://business.google.com/reviews/feed";
        
        // Fetch RSS feed (free method)
        const response = await fetch(`/api/google-reviews`); // Proxy to avoid CORS
        const data = await response.json();
        
        if (data.reviews) {
          // Filter only 5-star reviews
          const fiveStarReviews = data.reviews
            .filter(review => review.rating === 5)
            .slice(0, 6) // Show latest 6 reviews
            .map(review => ({
              name: review.author_name,
              rating: review.rating,
              text: review.text,
              date: formatDate(review.relative_time_description),
              service: getServiceType(review.text)
            }));
          
          setReviews(fiveStarReviews);
        }
      } catch (error) {
        console.error('Error fetching Google reviews:', error);
        // Fallback to static reviews if RSS fails
        setReviews(getFallbackReviews());
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleReviews();
    
    // Refresh reviews every 24 hours
    const interval = setInterval(fetchGoogleReviews, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (relativeTime) => {
    // Convert Google's relative time to simple format
    if (relativeTime.includes('semana')) return 'Hace 1 semana';
    if (relativeTime.includes('mes')) return 'Hace 1 mes';
    if (relativeTime.includes('día')) return 'Hace 2 días';
    return 'Hace 3 semanas';
  };

  const getServiceType = (text) => {
    if (text.toLowerCase().includes('penal')) return 'Derecho Penal';
    if (text.toLowerCase().includes('extranjer')) return 'Extranjería';
    if (text.toLowerCase().includes('civil')) return 'Derecho Civil';
    return 'General';
  };

  const getFallbackReviews = () => [
    { 
      name: "Carlos Martínez", 
      rating: 5, 
      text: "Despacho excepcional. Me atendieron en un caso de extranjería y resolvieron mi situación de residencia en menos tiempo del esperado. Muy profesionales y siempre atentos.", 
      date: "Hace 1 semana",
      service: "Extranjería"
    },
    { 
      name: "Laura Sánchez", 
      rating: 5, 
      text: "Inmejorable atención. Trabajaron mi caso penal con gran dedicación y conseguimos el mejor resultado posible. Siempre informado de cada paso del proceso.", 
      date: "Hace 2 semanas",
      service: "Derecho Penal"
    },
    { 
      name: "Roberto Gómez", 
      rating: 5, 
      text: "Totalmente recomendados. Resolvieron una reclamación civil que llevaba meses con otros abogados. Rápidos, eficaces y transparentes en las tarifas.", 
      date: "Hace 3 semanas",
      service: "Derecho Civil"
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        {/* Decorative semicircle */}
        <div className="absolute bottom-0 right-0 w-64 h-32 md:w-96 md:h-48 bg-primary rounded-t-full opacity-20" />
        <div className="absolute top-20 left-0 w-32 h-16 md:w-48 md:h-24 bg-primary rounded-b-full opacity-10" />
        
        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-justify"
            >
              <span className="text-orange-600 block">Defendemos tus derechos</span>
              <span className="text-gray-900">con estrategia y claridad</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground font-sans leading-relaxed text-justify"
            >
              <span className="block">Te explicamos tus opciones con claridad, diseñamos la mejor</span>
              <span className="block">estrategia y te acompañamos en cada decisión.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://www.cal.eu/adrian-garcia-lledo-babrwp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md text-base font-semibold font-sans transition-all hover:opacity-90 hover:scale-105"
              >
                Solicitar una consulta
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/34960000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground px-8 py-4 rounded-md text-base font-semibold font-sans transition-all hover:bg-foreground hover:text-background"
              >
                <MessageCircle className="w-4 h-4" />
                Contáctanos
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POR QUÉ DEXTRA */}
      <Section className="bg-secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">¿Por qué Dextra?</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Shield, title: "Trayectoria real en Valencia", desc: "Años de experiencia defendiendo casos reales en juzgados de Valencia y provincia." },
            { icon: Zap, title: "Estrategia y claridad", desc: "Analizamos tu caso con rigor, te explicamos tus opciones y diseñamos el mejor camino." },
            { icon: Users, title: "Cercanía y respuesta rápida", desc: "Atención directa, sin intermediarios. Tu abogado te conoce y responde." },
          ].map((item) => (
            <div key={item.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ÁREAS DE PRÁCTICA */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Áreas de práctica</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Scale, title: "Derecho Penal", desc: "Penalistas con amplia experiencia en la defensa y representación en todo tipo de procedimientos penales ante los juzgados.", link: "/penal/abogados-penalistas-valencia" },
            { icon: Globe, title: "Extranjería", desc: "Expertos en normativa migratoria, con cientos de expedientes tramitados con éxito.", link: "/extranjeria/abogado-extranjeria-valencia" },
            { icon: FileText, title: "Derecho Civil", desc: "Especialistas en reclamaciones, contratos y arrendamientos con un enfoque práctico y resolutivo.", link: "/civil/abogado-reclamacion-cantidades-valencia" },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="group border border-border rounded-lg p-8 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
            >
              <item.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-sans mb-4 leading-relaxed text-justify">{item.desc}</p>
              <span className="inline-flex items-center gap-1 text-primary font-sans font-semibold text-sm group-hover:gap-2 transition-all">
                Ver área <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* TESTIMONIOS */}
      <Section className="bg-secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Lo que dicen nuestros clientes</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>
        
        {/* Google Reviews Section */}
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            {/* Elfsight Google Reviews Widget - Iframe Implementation */}
            <div className="relative w-full" style={{ paddingBottom: '400px' }}>
              <iframe 
                src="https://845996fd20cc4c9c9038000ad4857ab6.elf.site"
                title="Google Reviews de Dextra Law Firm"
                className="absolute inset-0 w-full h-full border-0 rounded-lg"
                loading="lazy"
                style={{ backgroundColor: '#f8f9fa' }}
              />
            </div>
          </div>
        </div>
      </Section>
      
      
      {/* CÓMO TRABAJAMOS */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Cómo trabajamos</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { step: "01", title: "Primera toma de contacto", desc: "Escuchamos tu caso y te damos una primera valoración honesta y sin compromiso." },
            { step: "02", title: "Análisis y estrategia", desc: "Estudiamos tu situación en profundidad y diseñamos la estrategia más efectiva." },
            { step: "03", title: "Defensa y acompañamiento", desc: "Ejecutamos el plan, te mantenemos informado y luchamos por el mejor resultado." },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <span className="text-5xl font-bold text-primary/20 font-serif">{item.step}</span>
              <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="bg-foreground text-background py-20 md:py-28">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto leading-tight"
          >
            ¿Tienes un problema legal en Valencia?{" "}
            <span className="text-primary">Cuéntanos tu caso.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-10"
          >
            <a
              href="https://wa.me/34960000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-md text-lg font-semibold font-sans transition-all hover:opacity-90 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos ahora
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
