import { lazy, Suspense, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFixedCTA from "@/components/MobileFixedCTA";
import CookieConsent from "@/components/consent/CookieConsent";
import Home from "@/pages/Home";
import { usePageMeta } from "@/lib/seo";

// La portada se carga de inmediato; el resto de páginas, bajo demanda
// (cada una en su propio fichero JS, para reducir el JavaScript inicial).
const Despacho = lazy(() => import("@/pages/Despacho"));
const Equipo = lazy(() => import("@/pages/Equipo"));
const Areas = lazy(() => import("@/pages/Areas"));
const Penal = lazy(() => import("@/pages/ServicePages").then((m) => ({ default: m.Penal })));
const Extranjeria = lazy(() => import("@/pages/ServicePages").then((m) => ({ default: m.Extranjeria })));
const Civil = lazy(() => import("@/pages/ServicePages").then((m) => ({ default: m.Civil })));
const Casos = lazy(() => import("@/pages/Casos"));
const CasoEstafa = lazy(() => import("@/pages/casos/CasoEstafa"));
const CasoArraigo = lazy(() => import("@/pages/casos/CasoArraigo"));
const CasoReclamacion = lazy(() => import("@/pages/casos/CasoReclamacion"));
const CasoLesiones = lazy(() => import("@/pages/casos/CasoLesiones"));
const CasoTeletrabajador = lazy(() => import("@/pages/casos/CasoTeletrabajador"));
const CasoReclamacionImpago = lazy(() => import("@/pages/casos/CasoReclamacionImpago"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const BlogDeuda = lazy(() => import("@/pages/BlogDeuda"));
const Contacto = lazy(() => import("@/pages/Contacto"));
const Condiciones = lazy(() => import("@/pages/Condiciones"));
const AvisoLegal = lazy(() => import("@/pages/AvisoLegal"));
const Privacidad = lazy(() => import("@/pages/Privacidad"));
const Cookies = lazy(() => import("@/pages/Cookies"));
const Seguridad = lazy(() => import("@/pages/Seguridad"));
const NotFound = lazy(() => import("@/pages/NotFound"));

/**
 * Al cambiar de página: vuelve arriba y lleva el foco al contenido principal,
 * para que lectores de pantalla y teclado no se queden en el menú.
 */
const RouteChangeHandler = () => {
  const { pathname } = useLocation();
  const first = useRef(true);
  usePageMeta();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (first.current) {
      first.current = false;
      return;
    }
    document.getElementById("contenido")?.focus({ preventScroll: true });
  }, [pathname]);

  return null;
};

const App = () => (
  <BrowserRouter>
    <a
      href="#contenido"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-3 focus:font-sans focus:text-sm focus:font-semibold focus:text-background"
    >
      Saltar al contenido
    </a>
    <RouteChangeHandler />
    <Header />
    <main id="contenido" tabIndex={-1} className="pb-16 lg:pb-0 outline-none">
      <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/despacho" element={<Despacho />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/penal/abogados-penalistas-valencia" element={<Penal />} />
          <Route path="/extranjeria/abogado-extranjeria-valencia" element={<Extranjeria />} />
          <Route path="/civil/abogado-reclamacion-cantidades-valencia" element={<Civil />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/casos/absolucion-delito-leve-estafa" element={<CasoEstafa />} />
          <Route path="/casos/arraigo-social-aprobado" element={<CasoArraigo />} />
          <Route path="/casos/reclamacion-cantidad-desestimada" element={<CasoReclamacion />} />
          <Route path="/casos/absolucion-delito-lesiones" element={<CasoLesiones />} />
          <Route path="/casos/residencia-teletrabajador-internacional" element={<CasoTeletrabajador />} />
          <Route path="/casos/reclamacion-cantidad-impago" element={<CasoReclamacionImpago />} />
          <Route path="/condiciones" element={<Condiciones />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/seguridad" element={<Seguridad />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/que-hacer-si-te-detienen-valencia" element={<BlogDeuda />} />
          <Route path="/blog/como-reclamar-una-deuda" element={<BlogPost />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
    <MobileFixedCTA />
    <CookieConsent />
  </BrowserRouter>
);

export default App;
