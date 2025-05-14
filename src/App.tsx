import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { SEOHead } from "@/components/SEO";
import { ThemeProvider } from "@/components/ThemeProvider";

// Layout Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MiniNavbar from "@/components/layout/MiniNavbar";

// Pages
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import CareersPage from "@/pages/CareersPage";
import FAQPage from "@/pages/FAQPage";
import ServicesPage from "@/pages/ServicesPage";
import AutomotiveCeramicCoating from "@/pages/ceramic-coating/AutomotiveCeramicCoating";
import MarineCeramicCoating from "@/pages/ceramic-coating/MarineCeramicCoating";
import AviationCeramicCoating from "@/pages/ceramic-coating/AviationCeramicCoating";
import IndustrialCeramicCoating from "@/pages/ceramic-coating/IndustrialCeramicCoating";
import SignageCeramicCoating from "@/pages/ceramic-coating/SignageCeramicCoating";
import PaintProtectionFilm from "@/pages/PaintProtectionFilm";
import AutomotiveWindowTinting from "@/pages/window-tinting/AutomotiveWindowTinting";
import ResidentialWindowTinting from "@/pages/window-tinting/ResidentialWindowTinting";
import CommercialWindowTinting from "@/pages/window-tinting/CommercialWindowTinting";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import ServiceAgreement from "@/pages/ServiceAgreement";

import "./App.css";

// Create a new query client instance
const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="detail-pros-theme">
        <QueryClientProvider client={queryClient}>
          <SEOHead />
          <Router>
            <MiniNavbar />
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/ceramic-coating/automotive" element={<AutomotiveCeramicCoating />} />
              <Route path="/ceramic-coating/marine" element={<MarineCeramicCoating />} />
              <Route path="/ceramic-coating/aviation" element={<AviationCeramicCoating />} />
              <Route path="/ceramic-coating/industrial" element={<IndustrialCeramicCoating />} />
              <Route path="/ceramic-coating/signage" element={<SignageCeramicCoating />} />
              <Route path="/paint-protection-film" element={<PaintProtectionFilm />} />
              <Route path="/window-tinting/automotive" element={<AutomotiveWindowTinting />} />
              <Route path="/window-tinting/residential" element={<ResidentialWindowTinting />} />
              <Route path="/window-tinting/commercial" element={<CommercialWindowTinting />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/service-agreement" element={<ServiceAgreement />} />
            </Routes>
            <Footer />
          </Router>
          <Toaster />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
