
import TestimonialCard from "@/components/ui/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Detail Pros transformed my boat from weathered to wonderful. Their ceramic coating has made maintenance so much easier in the salt water.",
      name: "Michael Johnson",
      position: "Boat Owner",
      rating: 5
    },
    {
      quote: "The STEK PPF they installed on my Porsche is flawless. After a year in the Caribbean sun, the paint still looks brand new.",
      name: "Sarah Williams",
      position: "Porsche Owner",
      rating: 5
    },
    {
      quote: "I've tried several detailers in Grand Cayman, but Detail Pros is simply the best. Their ceramic coating work is spectacular.",
      name: "David Thompson",
      position: "Car Enthusiast",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-detailpros-pink/10 text-detailpros-pink px-4 py-1 text-sm rounded-full mb-4">
            Customer Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers across the Cayman Islands have to say about our detailing services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
