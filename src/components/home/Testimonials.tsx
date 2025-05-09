
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Detail Pros transformed my boat from weathered to wonderful. Their ceramic coating has made maintenance so much easier in the salt water.",
      name: "Michael Johnson",
      position: "Boat Owner",
      rating: 5,
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "The STEK PPF they installed on my Porsche is flawless. After a year in the Caribbean sun, the paint still looks brand new.",
      name: "Sarah Williams",
      position: "Porsche Owner",
      rating: 5,
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "I've tried several detailers in Grand Cayman, but Detail Pros is simply the best. Their ceramic coating work is spectacular.",
      name: "David Thompson",
      position: "Car Enthusiast",
      rating: 5,
      image: "/images/testimonial-3.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Don't just take our word for it. Here's what our satisfied customers across 
            the Cayman Islands have to say about our services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 bg-white p-10 rounded-xl shadow-lg"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-yellow-400 w-5 h-5" />
                      ))}
                    </div>
                    <p className="text-xl mb-8 italic text-gray-700">"{testimonial.quote}"</p>
                    <div className="flex items-center flex-col">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                        <img 
                          src={testimonial.image || "/placeholder.svg"} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentIndex(index)} 
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? 'bg-detailpros-pink' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
