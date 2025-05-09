
import ServiceCard from "@/components/ui/ServiceCard";
import { Car, Brush, DropletIcon } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Mobile Detailing",
      description: "Premium car and boat detailing services that come to you. We offer interior and exterior cleaning, polishing, and protection.",
      icon: <Car className="text-detailpros-pink" size={24} />,
      imageUrl: "/placeholder.svg",
      link: "/services#detailing",
      features: [
        "Interior deep cleaning",
        "Exterior wash & wax",
        "Paint correction",
        "Engine bay detailing",
        "Headlight restoration"
      ]
    },
    {
      title: "Ceramic Pro Coating",
      description: "Official Ceramic Pro installer in the Cayman Islands. Protect your vehicle with the industry's leading ceramic coating.",
      icon: <DropletIcon className="text-detailpros-pink" size={24} />,
      imageUrl: "/placeholder.svg",
      link: "/services#ceramic-coating",
      features: [
        "9H Ceramic Pro coating",
        "Hydrophobic protection",
        "UV resistance",
        "Chemical resistance",
        "Extended paint protection"
      ]
    },
    {
      title: "PPF & Window Tinting",
      description: "STEK paint protection film installation and professional window tinting to protect your vehicle from the Caribbean sun.",
      icon: <Brush className="text-detailpros-pink" size={24} />,
      imageUrl: "/placeholder.svg",
      link: "/services#ppf-tinting",
      features: [
        "STEK paint protection film",
        "Self-healing film options",
        "Ceramic window tinting",
        "Heat reduction",
        "UV protection"
      ]
    }
  ];

  return (
    <section className="section-padding bg-detailpros-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-detailpros-pink/10 text-detailpros-pink px-4 py-1 text-sm rounded-full mb-4">
            Our Professional Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Detailing Solutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive automotive care services tailored to the unique climate and conditions of the Cayman Islands, 
            protecting your investment from salt air, sun damage, and everyday wear.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
              link={service.link}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
