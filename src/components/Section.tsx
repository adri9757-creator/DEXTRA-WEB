import { ReactNode, useEffect, useRef, useState } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Sección con aparición suave al entrar en pantalla.
 * Sustituye a framer-motion (≈35 KB menos de JS) con IntersectionObserver y
 * CSS. Respeta "reducir movimiento" (ver .reveal en index.css).
 */
const Section = ({ children, className = "", id }: SectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className={`reveal ${visible ? "is-visible" : ""} py-20 md:py-28 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
