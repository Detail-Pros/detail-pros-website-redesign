import CallToAction from "@/components/home/CallToAction";
import { Check, CircleCheck } from "lucide-react";
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* About Header */}
        <section className="bg-black text-white py-10">
          <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                About Us
              </h1>
              <p className="text-sm text-gray-400">
                Detail Pros is the premier choice for luxury car and boat detailing in the Cayman Islands.
              </p>
            </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-detailpros-pink/10 text-detailpros-pink px-4 py-1 text-sm rounded-full mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl font-bold mb-6">Passion for Perfection</h2>
                <p className="text-gray-600 mb-6">
                  Detail Pros was founded with a simple mission: to provide the highest quality automotive care services 
                  in the Cayman Islands. What began as a passion project has grown into the island's most trusted name 
                  in mobile detailing, ceramic coatings, and paint protection.
                </p>
                <p className="text-gray-600 mb-6">
                  As locals who understand the unique challenges that the Caribbean environment presents to vehicles, 
                  we've developed specialized techniques and partnered with industry-leading brands like Ceramic Pro 
                  and STEK to offer solutions specifically tailored to combat salt air, intense sun, and tropical conditions.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to serve a diverse clientele across Grand Cayman, from luxury car owners to boat enthusiasts, 
                  all who share our appreciation for immaculate, well-protected vehicles.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img src="/placeholder.svg" alt="Detail Pros Team" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-detailpros-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-detailpros-pink/10 text-detailpros-pink px-4 py-1 text-sm rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Detail Pros Difference</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We stand apart from other detailing services through our unwavering commitment to quality, 
                expertise, and customer satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <CircleCheck className="text-detailpros-pink mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Certified Expertise</h3>
                <p className="text-gray-600">
                  Our team is fully certified by Ceramic Pro and STEK, with extensive training and years of 
                  experience in high-end vehicle care.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <CircleCheck className="text-detailpros-pink mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Island-Wide Mobile Service</h3>
                <p className="text-gray-600">
                  We come to you anywhere in Grand Cayman, making vehicle maintenance convenient without 
                  sacrificing quality.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <CircleCheck className="text-detailpros-pink mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Premium Products</h3>
                <p className="text-gray-600">
                  We use only the highest quality, professional-grade products that are specifically 
                  chosen for their effectiveness in tropical climates.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <CircleCheck className="text-detailpros-pink mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Caribbean Climate Specialists</h3>
                <p className="text-gray-600">
                  Our techniques and solutions are specially adapted to address the unique challenges 
                  that Caribbean conditions present to vehicles.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <CircleCheck className="text-detailpros-pink mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Attention to Detail</h3>
                <p className="text-gray-600">
                  Our name says it all. We obsess over the details that others miss, ensuring 
                  every vehicle receives meticulous care.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <CircleCheck className="text-detailpros-pink mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">
                  We stand behind our work with a satisfaction guarantee on all our services, 
                  ensuring peace of mind with every booking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-detailpros-pink/10 text-detailpros-pink px-4 py-1 text-sm rounded-full mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our proven process ensures consistent, exceptional results for every vehicle we service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-detailpros-pink text-white font-bold">
                  1
                </div>
                <div className="absolute left-4 top-8 h-full w-0.5 bg-detailpros-pink/30"></div>
                <h3 className="text-xl font-bold mb-3">Consultation & Assessment</h3>
                <p className="text-gray-600">
                  We begin with a thorough evaluation of your vehicle's condition, discussing your goals and recommending 
                  the best services for your specific needs and budget.
                </p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-detailpros-pink text-white font-bold">
                  2
                </div>
                <div className="absolute left-4 top-8 h-full w-0.5 bg-detailpros-pink/30"></div>
                <h3 className="text-xl font-bold mb-3">Preparation & Cleaning</h3>
                <p className="text-gray-600">
                  A comprehensive cleaning process removes all contaminants, preparing surfaces for treatment. 
                  For coating services, this includes clay bar treatment and paint decontamination.
                </p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-detailpros-pink text-white font-bold">
                  3
                </div>
                <div className="absolute left-4 top-8 h-full w-0.5 bg-detailpros-pink/30"></div>
                <h3 className="text-xl font-bold mb-3">Correction & Restoration</h3>
                <p className="text-gray-600">
                  Professional paint correction removes swirls, scratches, and imperfections, restoring your vehicle's 
                  finish to a showroom-quality appearance.
                </p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-detailpros-pink text-white font-bold">
                  4
                </div>
                <div className="absolute left-4 top-8 h-full w-0.5 bg-detailpros-pink/30"></div>
                <h3 className="text-xl font-bold mb-3">Protection Application</h3>
                <p className="text-gray-600">
                  Whether it's ceramic coating, paint protection film, or traditional waxes and sealants, 
                  we meticulously apply protective treatments to safeguard your vehicle.
                </p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-detailpros-pink text-white font-bold">
                  5
                </div>
                <div className="absolute left-4 top-8 h-full w-0.5 bg-detailpros-pink/30"></div>
                <h3 className="text-xl font-bold mb-3">Final Inspection</h3>
                <p className="text-gray-600">
                  A detailed quality control inspection ensures every aspect of the service meets our exacting standards 
                  before returning your vehicle.
                </p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-detailpros-pink text-white font-bold">
                  6
                </div>
                <h3 className="text-xl font-bold mb-3">Follow-up Care</h3>
                <p className="text-gray-600">
                  We provide maintenance instructions and recommendations to help you maintain your vehicle's appearance 
                  and protection for years to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </div>;
};
export default About;