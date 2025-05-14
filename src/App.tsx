
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import CeramicCoating from "./pages/CeramicCoating";
import CeramicCoatingMarine from "./pages/CeramicCoatingMarine";
import PaintProtectionFilm from "./pages/PaintProtectionFilm";
import WindowTinting from "./pages/WindowTinting";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import MiniNavbar from "./components/layout/MiniNavbar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ServiceAgreement from "./pages/ServiceAgreement";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

// ScrollToAction component that handles scrolling to top on route change
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
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 left-0 right-0 z-50">
            <MiniNavbar />
            <Navbar />
          </header>
          <main className="flex-grow mt-[108px]"> {/* Combined height of MiniNavbar (36px) and Navbar (72px) */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/ceramic-coating/*" element={<CeramicCoating />} />
              <Route path="/ceramic-coating/automotive" element={<CeramicCoating />} />
              <Route path="/ceramic-coating/marine" element={<CeramicCoatingMarine />} />
              <Route path="/ceramic-coating/aviation" element={<CeramicCoating />} />
              <Route path="/ceramic-coating/industrial" element={<CeramicCoating />} />
              <Route path="/ceramic-coating/signage" element={<CeramicCoating />} />
              <Route path="/paint-protection-film" element={<PaintProtectionFilm />} />
              <Route path="/window-tinting/*" element={<WindowTinting />} />
              <Route path="/window-tinting/automotive" element={<WindowTinting />} />
              <Route path="/window-tinting/commercial" element={<WindowTinting />} />
              <Route path="/window-tinting/residential" element={<WindowTinting />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/service-agreement" element={<ServiceAgreement />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
