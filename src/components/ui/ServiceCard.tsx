
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  link: string;
  features?: string[];
}

const ServiceCard = ({ title, description, icon, imageUrl, link, features }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="relative h-56 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <div className="flex items-center text-white">
            {icon}
            <h3 className="text-xl font-bold ml-3">{title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        
        {features && features.length > 0 && (
          <>
            <button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className="flex items-center text-sm font-medium text-detailpros-pink mb-3"
            >
              {isExpanded ? "Show less" : "Show features"}
              {isExpanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
            </button>
            
            {isExpanded && (
              <ul className="list-disc pl-5 mb-4 text-sm text-gray-600 space-y-1">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
          </>
        )}
        
        <Link to={link}>
          <Button className="w-full bg-detailpros-pink hover:bg-opacity-90">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
