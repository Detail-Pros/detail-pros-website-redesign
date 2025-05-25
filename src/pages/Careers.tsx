
import CallToAction from "@/components/home/CallToAction";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <section className="bg-black text-white py-10">
          <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Join Our <span className="text-detailpros-pink">Team</span>
              </h1>
              <p className="text-sm text-gray-400">
                 Explore career opportunities with Detail Pros and be part of our growing team.
              </p>
            </div>
        </section>
        <CallToAction />
    </div>
  );
};

export default Careers;
