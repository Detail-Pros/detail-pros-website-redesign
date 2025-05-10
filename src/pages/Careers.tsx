
import CallToAction from "@/components/home/CallToAction";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Join Our <span className="text-detailpros-pink">Team</span>
            </h1>
            <p className="text-lg mb-6">
              Explore career opportunities with DetailPros and be part of our growing team.
            </p>
            {/* Content will be added based on future design specifications */}
          </div>
        </section>
        <CallToAction />
    </div>
  );
};

export default Careers;
