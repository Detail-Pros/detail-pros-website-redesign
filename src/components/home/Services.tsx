
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Shield, Sparkles, SunDim } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Car className="w-12 h-12 text-detailpros-pink" />,
      title: "Professional Detailing",
      description: "Interior and exterior detailing services tailored to your vehicle's specific needs, using premium products for a showroom finish.",
      link: "/services#detailing"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-detailpros-pink" />,
      title: "Ceramic Pro Coating",
      description: "Official Ceramic Pro installer in the Cayman Islands. Ultimate paint protection with 9H hardness ceramic coating.",
      link: "/services#ceramic-coating"
    },
    {
      icon: <Shield className="w-12 h-12 text-detailpros-pink" />,
      title: "Paint Protection Film",
      description: "STEK self-healing paint protection film, providing the highest level of protection against road debris and scratches.",
      link: "/services#ppf"
    },
    {
      icon: <SunDim className="w-12 h-12 text-detailpros-pink" />,
      title: "Window Tinting",
      description: "High-performance window films that reject heat, block UV rays, and enhance privacy and comfort.",
      link: "/services#tinting"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Premium Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We provide comprehensive automotive care services tailored to protect your investment from 
            the unique climate and conditions of the Cayman Islands.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-lg p-8 flex flex-col items-center text-center transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link to={service.link} className="text-detailpros-pink hover:underline font-medium mt-auto">
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link to="/services">
            <Button className="bg-detailpros-pink hover:bg-opacity-90 text-white px-8 py-6 text-lg rounded-full">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
