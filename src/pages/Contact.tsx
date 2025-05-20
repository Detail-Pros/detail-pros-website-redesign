
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from 'lucide-react';

// Define the form schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const { toast } = useToast();

  // Initialize react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Here you would typically send the form data to your backend or a service like EmailJS
      console.log("Form submitted:", data);
      
      // Show success message
      toast({
        title: "Form Submitted",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact DetailPros | Professional Detailing Services in Cayman Islands</title>
        <meta name="description" content="Contact DetailPros for professional automotive, marine, and aviation detailing services in the Cayman Islands. Schedule a service or request a quote today." />
        <meta name="keywords" content="contact DetailPros, auto detailing Cayman, car detailing contact, professional detailing services, Cayman Islands" />
      </Helmet>

      <div className="pt-16 pb-24">
        {/* Hero Section */}
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl">
              Have questions or need to schedule a service? We're here to help. Reach out to us using the form below or through any of our contact channels.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="What would you like to discuss?"
                            className="resize-none min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="bg-detailpros-pink hover:bg-opacity-90 text-white">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="text-detailpros-pink mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a href="mailto:contact@detailpros.ky" className="text-gray-600 hover:text-detailpros-pink">
                      contact@detailpros.ky
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-detailpros-pink mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <a href="tel:+13459299840" className="text-gray-600 hover:text-detailpros-pink">
                      (345) 929-9840
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-detailpros-pink mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <address className="text-gray-600 not-italic">
                      Unit E33 Kingbird Warehouses<br />
                      64 Kingbird Drive<br />
                      George Town, Grand Cayman<br />
                      Cayman Islands
                    </address>
                    <a 
                      href="https://maps.app.goo.gl/igDHZFcRsJhJnp8E7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex text-detailpros-pink hover:underline mt-2"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="font-medium">Monday - Friday:</dt>
                    <dd>9:00 AM - 6:00 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium">Saturday:</dt>
                    <dd>9:00 AM - 4:00 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium">Sunday:</dt>
                    <dd>Closed</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="h-[400px] w-full rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.965514697272!2d-81.36371632431871!3d19.30338084818047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f2587f2ea851a11%3A0xbd235f6837fe5929!2sDetail%20Pros!5e0!3m2!1sen!2sus!4v1703505284967!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Detail Pros Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
