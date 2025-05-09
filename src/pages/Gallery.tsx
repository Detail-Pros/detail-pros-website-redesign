
import { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/home/CallToAction";
import { Button } from "@/components/ui/button";
import { GalleryHorizontal, X } from "lucide-react";

// Normally, we would fetch these from a backend or use real images
const galleryItems = [
  {
    id: 1,
    category: "detailing",
    title: "Luxury SUV Detail",
    description: "Full interior and exterior detailing with ceramic coating",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    category: "ceramic",
    title: "Ceramic Pro Coating",
    description: "9H ceramic coating application on a sports car",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    category: "ppf",
    title: "STEK PPF Installation",
    description: "Full front-end protection with self-healing film",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 4,
    category: "tinting",
    title: "Window Tinting",
    description: "Ceramic tint installation on luxury sedan",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 5,
    category: "boat",
    title: "Yacht Detailing",
    description: "Marine detailing and protection for coastal conditions",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 6,
    category: "detailing",
    title: "Paint Correction",
    description: "Swirl mark and scratch removal on dark paint",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 7,
    category: "ceramic",
    title: "Wheels Protection",
    description: "Ceramic coating application on alloy wheels",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 8,
    category: "ppf",
    title: "Hood PPF",
    description: "Clear bra installation on vehicle hood",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 9,
    category: "detailing",
    title: "Interior Detail",
    description: "Deep cleaning of leather seats and trim",
    imageUrl: "/placeholder.svg",
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<any>(null);

  const filteredGallery = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (item: any) => {
    setLightboxImage(item);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Gallery Header */}
        <section className="relative py-24 bg-detailpros-black">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-detailpros-pink">Gallery</span>
              </h1>
              <p className="text-lg text-white/90">
                Browse our portfolio of work showcasing premium detailing, ceramic coating, and paint protection film installations.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button 
                variant={activeFilter === "all" ? "default" : "outline"}
                className={activeFilter === "all" ? "bg-detailpros-pink" : ""}
                onClick={() => setActiveFilter("all")}
              >
                All Projects
              </Button>
              <Button 
                variant={activeFilter === "detailing" ? "default" : "outline"}
                className={activeFilter === "detailing" ? "bg-detailpros-pink" : ""}
                onClick={() => setActiveFilter("detailing")}
              >
                Detailing
              </Button>
              <Button 
                variant={activeFilter === "ceramic" ? "default" : "outline"}
                className={activeFilter === "ceramic" ? "bg-detailpros-pink" : ""}
                onClick={() => setActiveFilter("ceramic")}
              >
                Ceramic Coating
              </Button>
              <Button 
                variant={activeFilter === "ppf" ? "default" : "outline"}
                className={activeFilter === "ppf" ? "bg-detailpros-pink" : ""}
                onClick={() => setActiveFilter("ppf")}
              >
                Paint Protection
              </Button>
              <Button 
                variant={activeFilter === "tinting" ? "default" : "outline"}
                className={activeFilter === "tinting" ? "bg-detailpros-pink" : ""}
                onClick={() => setActiveFilter("tinting")}
              >
                Window Tinting
              </Button>
              <Button 
                variant={activeFilter === "boat" ? "default" : "outline"}
                className={activeFilter === "boat" ? "bg-detailpros-pink" : ""}
                onClick={() => setActiveFilter("boat")}
              >
                Boats & Yachts
              </Button>
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-72"
                  onClick={() => openLightbox(item)}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.description}</p>
                      <div className="mt-4 flex items-center text-detailpros-pink">
                        <GalleryHorizontal size={18} className="mr-1" />
                        <span className="text-sm font-medium">View Project</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredGallery.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No gallery items found for this category.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Lightbox */}
        {lightboxImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
            <div className="max-w-4xl w-full relative" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute -top-12 right-0 text-white hover:text-detailpros-pink transition-colors"
                onClick={closeLightbox}
              >
                <X size={24} />
              </button>
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={lightboxImage.imageUrl} 
                  alt={lightboxImage.title} 
                  className="w-full object-contain max-h-[70vh]"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{lightboxImage.title}</h3>
                  <p className="text-gray-600">{lightboxImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
