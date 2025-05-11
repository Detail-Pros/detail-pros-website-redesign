
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real application, we would send this data to a server
    toast.success("Thank you for your message! We'll be in touch soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-16">
        {/* Contact Header */}
         <section className="bg-black text-white py-10">
          <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Contact
              </h1>
              <p className="text-sm text-gray-400">
                Have questions or ready to book a service? Get in touch with our team and we'll respond promptly.
              </p>
            </div>
        </section>
        {/* <section className="relative py-24 bg-detailpros-black">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact <span className="text-detailpros-pink">Us</span>
              </h1>
              <p className="text-lg text-white/90">
                Have questions or ready to book a service? Get in touch with our team and we'll respond promptly.
              </p>
            </div>
          </div>
        </section> */}

        {/* Contact Info & Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're available to answer your questions about our services, provide quotes, or schedule appointments 
                  across Grand Cayman.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-detailpros-pink/10 p-3 rounded-full mr-5">
                      <Phone className="text-detailpros-pink" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="text-gray-600 mb-1">Call us directly:</p>
                      <a href="tel:+13455551234" className="text-detailpros-pink hover:underline">+1 345-555-1234</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-detailpros-pink/10 p-3 rounded-full mr-5">
                      <Mail className="text-detailpros-pink" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-gray-600 mb-1">Send us a message:</p>
                      <a href="mailto:info@detailproscayman.com" className="text-detailpros-pink hover:underline">info@detailproscayman.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-detailpros-pink/10 p-3 rounded-full mr-5">
                      <MapPin className="text-detailpros-pink" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Location</h3>
                      <p className="text-gray-600 mb-1">Our mobile service covers all of Grand Cayman</p>
                      <p className="text-gray-600">Main Office: 123 West Bay Road, Grand Cayman</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-detailpros-pink/50 focus:border-detailpros-pink"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-detailpros-pink/50 focus:border-detailpros-pink"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-detailpros-pink/50 focus:border-detailpros-pink"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-detailpros-pink/50 focus:border-detailpros-pink"
                      >
                        <option value="">Please select</option>
                        <option value="Mobile Detailing">Mobile Detailing</option>
                        <option value="Ceramic Pro Coating">Ceramic Pro Coating</option>
                        <option value="Paint Protection Film">Paint Protection Film</option>
                        <option value="Window Tinting">Window Tinting</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-detailpros-pink/50 focus:border-detailpros-pink"
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="bg-detailpros-pink hover:bg-opacity-90 w-full">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        {/* <section className="pb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <div className="h-96 w-full bg-gray-200 rounded-lg overflow-hidden shadow-md">
              {/* This would be replaced with an actual map component in production */}
              {/* <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <p className="text-gray-600">Map of Grand Cayman location would be displayed here</p>
              </div>
            </div>
          </div> */}
        </section> */}
      </main>
    </div>
  );
};

export default Contact;
