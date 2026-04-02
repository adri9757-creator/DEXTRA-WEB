import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { Eye, Heart, Target, Users, ArrowRight } from "lucide-react";
import despachoBg from "@/assets/JUSTICIA.jpeg";

const Despacho = () => (
  <>
    <section className="pt-32 pb-16">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">Un despacho diferente en Valencia</h1>
        <div className="w-16 h-1 bg-primary mt-6" />
      </div>
    </section>

    <div className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/despachogr-bg.png)` }}>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative container">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-white">Quiénes somos</h2>
          <p className="text-white font-sans text-lg leading-relaxed mb-4 text-justify">
            Dextra Law Firm nace de la convicción de que la abogacía puede ser diferente. Te explicamos tus opciones con claridad, diseñamos la mejor estrategia y te acompañamos en cada decisión.
          </p>
          <p className="text-white font-sans text-lg leading-relaxed text-justify">
            Nuestro enfoque es simple: escuchar, entender y actuar con estrategia. Sin rodeos, sin tecnicismos innecesarios y siempre con transparencia absoluta.
          </p>
        </div>
      </div>
    </div>

    <Section className="bg-secondary">
      <h2 className="text-3xl font-bold mb-12">Qué nos diferencia</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { icon: Eye, title: "Claridad", desc: "Te explicamos todo en un lenguaje que entiendas. Sin sorpresas." },
          { icon: Heart, title: "Acompañamiento real", desc: "No eres un expediente. Estamos contigo en cada paso del proceso." },
          { icon: Target, title: "Transparencia", desc: "Sabes desde el primer día qué esperar, cuánto cuesta y cómo avanza tu caso." },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
              <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed group-hover:text-foreground transition-colors">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <h2 className="text-3xl font-bold mb-12 text-center">Nuestros valores</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { name: "Claridad", desc: "Explicamos todo de forma sencilla y directa, sin tecnicismos innecesarios." },
          { name: "Compromiso", desc: "Nos dedicamos 100% a cada caso con profesionalismo y dedicación." },
          { name: "Rigor", desc: "Analizamos cada detalle con precisión y metodología probada." },
          { name: "Cercanía", desc: "Tratamos a cada cliente como persona, no como un expediente más." },
        ].map((v) => (
          <div key={v.name} className="text-center p-6 border border-border rounded-lg transition-all duration-300 group hover:bg-orange-100 hover:border-orange-300 hover:scale-105">
            <h3 className="text-lg font-bold">{v.name}</h3>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <section className="bg-foreground text-background py-20">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quieres conocernos?</h2>
        <a
          href="https://wa.me/34624164536"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold font-sans hover:opacity-90 transition-all hover:scale-105"
        >
          Contactar <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  </>
);

export default Despacho;
