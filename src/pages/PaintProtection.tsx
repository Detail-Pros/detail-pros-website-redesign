
import Navbar from "@/components/layout/Navbar";
import MiniNavbar from "@/components/layout/MiniNavbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/home/CallToAction";

const PaintProtection = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MiniNavbar />
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Paint Protection <span className="text-detailpros-pink">Film</span>
            </h1>
            <p className="text-lg mb-6">
              Our premium paint protection film services shield your vehicle from road debris, scratches, and environmental damage.
            </p>
            {/* Content will be added based on future design specifications */}
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default PaintProtection;
