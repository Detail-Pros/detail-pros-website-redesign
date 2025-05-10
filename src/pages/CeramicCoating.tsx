
import CallToAction from "@/components/home/CallToAction";

const CeramicCoating = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Ceramic <span className="text-detailpros-pink">Coating</span>
            </h1>
            <p className="text-lg mb-6">
              Our premium ceramic coating services provide long-lasting protection and shine for your vehicle.
            </p>
            {/* Content will be added based on future design specifications */}
          </div>
        </section>
        <CallToAction />
    </div>
  );
};

export default CeramicCoating;
