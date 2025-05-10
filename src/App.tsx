
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import CeramicCoating from "./pages/CeramicCoating";
import PaintProtection from "./pages/PaintProtection";
import WindowTinting from "./pages/WindowTinting";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ceramic-coating/*" element={<CeramicCoating />} />
          <Route path="/ceramic-coating/automotive" element={<CeramicCoating />} />
          <Route path="/ceramic-coating/marine" element={<CeramicCoating />} />
          <Route path="/ceramic-coating/aviation" element={<CeramicCoating />} />
          <Route path="/ceramic-coating/industrial" element={<CeramicCoating />} />
          <Route path="/ceramic-coating/signage" element={<CeramicCoating />} />
          <Route path="/paint-protection" element={<PaintProtection />} />
          <Route path="/window-tinting/*" element={<WindowTinting />} />
          <Route path="/window-tinting/automotive" element={<WindowTinting />} />
          <Route path="/window-tinting/commercial" element={<WindowTinting />} />
          <Route path="/window-tinting/residential" element={<WindowTinting />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
