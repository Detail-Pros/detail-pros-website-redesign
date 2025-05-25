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
      <main className="flex-grow">
        {/* Contact Header */}
        <section className="bg-black text-white py-10">
          <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Contact Us
              </h1>
              <p className="text-sm text-gray-400">
                Have questions or ready to book a service? Get in touch with our team and we'll respond promptly.
              </p>
            </div>
        </section>

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
                      <a href="tel:+13455551234" className="text-detailpros-pink hover:underline">(345) 929-9840</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-detailpros-pink/10 p-3 rounded-full mr-5">
                      <Mail className="text-detailpros-pink" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-gray-600 mb-1">Send us a message:</p>
                      <a href="mailto:info@detailproscayman.com" className="text-detailpros-pink hover:underline">contact@detailpros.ky</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-detailpros-pink/10 p-3 rounded-full mr-5">
                      <MapPin className="text-detailpros-pink" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Location</h3>
                      <p className="text-gray-600 mb-1">Our mobile service covers all of Grand Cayman</p>
                      <p className="text-gray-600">Main Office: Unit 33 Kingbird Warehouses, 64 Kingbird Drive, George Town, Grand Cayman</p>
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
                  <fieldd-lead-form code="EhQ16O"></fieldd-lead-form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
