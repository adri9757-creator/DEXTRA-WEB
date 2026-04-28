import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFixedCTA from "@/components/MobileFixedCTA";
import Home from "@/pages/Home";
import Despacho from "@/pages/Despacho";
import Equipo from "@/pages/Equipo";
import Areas from "@/pages/Areas";
import { Penal, Extranjeria, Civil } from "@/pages/ServicePages";
import Casos from "@/pages/Casos";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import BlogDeuda from "@/pages/BlogDeuda";
import CasoEstafa from "@/pages/casos/CasoEstafa";
import CasoArraigo from "@/pages/casos/CasoArraigo";
import CasoReclamacion from "@/pages/casos/CasoReclamacion";
import CasoLesiones from "@/pages/casos/CasoLesiones";
import CasoTeletrabajador from "@/pages/casos/CasoTeletrabajador";
import CasoReclamacionImpago from "@/pages/casos/CasoReclamacionImpago";
import Condiciones from "@/pages/Condiciones";
import AvisoLegal from "@/pages/AvisoLegal";
import Privacidad from "@/pages/Privacidad";
import Cookies from "@/pages/Cookies";
import PoliticaCookies from "@/pages/PoliticaCookies";
import Contacto from "@/pages/Contacto";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main className="pb-16 lg:pb-0">
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
            <Route path="/politica-cookies" element={<PoliticaCookies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/que-hacer-si-te-detienen-valencia" element={<BlogDeuda />} />
            <Route path="/blog/como-reclamar-una-deuda" element={<BlogPost />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <MobileFixedCTA />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
