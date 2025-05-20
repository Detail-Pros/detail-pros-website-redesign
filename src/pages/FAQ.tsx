
import { useState, useEffect } from 'react';
import CallToAction from "@/components/home/CallToAction";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

type FAQItem = {
  question: string;
  answer: string;
  categories: string[];
};

// Comprehensive list of FAQs organized by category
const faqData: FAQItem[] = [
  // Detailing FAQs
  {
    question: "What is included in your mobile detailing service?",
    answer: "Our mobile detailing service brings professional car care to your location. It includes exterior wash and wax, interior vacuuming, surface cleaning, window cleaning, tire dressing, and more. We offer packages for Inside & Out, Exterior Only, and Interior Only to suit your needs.",
    categories: ["detailing", "mobile"]
  },
  {
    question: "How long does a typical detailing service take?",
    answer: "Service time varies depending on the vehicle size and package selected. A basic exterior wash may take 1-2 hours, while a complete inside and out detail can take 3-5 hours. We always provide estimated completion times when scheduling your appointment.",
    categories: ["detailing", "mobile", "in-shop"]
  },
  {
    question: "What's the difference between mobile and in-shop detailing?",
    answer: "Mobile detailing brings our services to your location (home, office, etc.) with all necessary equipment and water supply. In-shop detailing is performed at our facility, which allows for more extensive services like paint correction, ceramic coating application, and PPF installation that require controlled environments.",
    categories: ["detailing", "mobile", "in-shop"]
  },
  {
    question: "Do you provide detailing services for boats and other vehicles?",
    answer: "Yes! Beyond cars, SUVs, and trucks, we offer specialized detailing services for boats, motorcycles, RVs, and other vehicles. Each service is tailored to the specific requirements of the vehicle type.",
    categories: ["detailing", "marine"]
  },
  {
    question: "How often should I have my vehicle professionally detailed?",
    answer: "For optimal maintenance, we recommend professional detailing every 3-4 months. However, this can vary based on your driving conditions, climate, and how often you wash your car yourself. Regular maintenance washes between full details can help maintain your vehicle's appearance.",
    categories: ["detailing", "maintenance"]
  },
  
  // Ceramic Coating FAQs
  {
    question: "What is Ceramic Pro ION Coating?",
    answer: "Ceramic Pro ION is a professional-grade ceramic coating that creates a permanent protective layer on your vehicle's paint. It provides exceptional gloss, hydrophobic properties (extreme water beading), and protection against environmental contaminants, UV rays, light scratches, and chemical stains.",
    categories: ["ceramic coating", "product info"]
  },
  {
    question: "How long does Ceramic Pro ION Coating last?",
    answer: "Ceramic Pro ION Coating can last anywhere from 2 to 5+ years depending on the package selected. Our basic package offers 2-year protection, while our premium packages can provide 5+ years of protection with proper maintenance and care.",
    categories: ["ceramic coating", "durability"]
  },
  {
    question: "Is ceramic coating worth the investment?",
    answer: "Yes, ceramic coating is worth the investment for several reasons: it provides long-term protection, reduces maintenance time and costs, prevents paint oxidation, enhances resale value, and keeps your vehicle looking showroom-new for years. The initial investment pays off over time through reduced need for waxing and other paint protection products.",
    categories: ["ceramic coating", "value"]
  },
  {
    question: "Can ceramic coating be applied to boats and marine vessels?",
    answer: "Absolutely. Ceramic Pro offers specialized marine formulations designed to protect boats and other watercraft from harsh saltwater, UV exposure, and water spots. It can be applied to gelcoat, painted surfaces, metal, and other materials found on marine vessels.",
    categories: ["ceramic coating", "marine"]
  },
  {
    question: "How do I maintain a ceramic coated vehicle?",
    answer: "Maintenance for ceramic coated vehicles is simple: regular washing with pH-neutral shampoo, avoiding automatic car washes with brushes, and periodic maintenance treatments. We recommend hand washing or touchless car washes, and we offer maintenance services to ensure your coating performs optimally for years.",
    categories: ["ceramic coating", "maintenance"]
  },
  
  // PPF FAQs
  {
    question: "What is STEK Paint Protection Film (PPF)?",
    answer: "STEK PPF is a high-quality thermoplastic urethane film applied to vulnerable areas of your vehicle to protect against rock chips, scratches, bug damage, and road debris. It's virtually invisible, preserves your paint's appearance, and many STEK films feature self-healing properties to eliminate minor swirl marks and scratches.",
    categories: ["ppf", "product info"]
  },
  {
    question: "How long does STEK Paint Protection Film last?",
    answer: "STEK Paint Protection Film typically lasts between 5-10 years depending on the specific product line, driving conditions, and maintenance. All STEK PPF products come with manufacturer warranties ranging from 5-10 years against yellowing, cracking, or peeling.",
    categories: ["ppf", "durability"]
  },
  {
    question: "Does Paint Protection Film prevent scratches?",
    answer: "Yes, STEK PPF is designed specifically to prevent scratches from reaching your paint. It absorbs impacts from rocks, road debris, and light scratching. Many STEK films also feature self-healing technology that allows minor scratches in the film itself to disappear when exposed to heat.",
    categories: ["ppf", "protection"]
  },
  {
    question: "What's better, Ceramic Coating or Paint Protection Film?",
    answer: "Both offer distinct benefits. PPF provides physical protection against rock chips and scratches, while ceramic coating excels at chemical resistance and hydrophobic properties. For ultimate protection, we recommend combining both: applying PPF to high-impact areas and ceramic coating over the entire vehicle, including the PPF.",
    categories: ["ppf", "ceramic coating", "comparison"]
  },
  {
    question: "Is Paint Protection Film self-healing?",
    answer: "Many of our STEK PPF products feature self-healing technology. When the film is scratched, applying heat (like warm water or sunlight) activates the self-healing properties, causing minor scratches and swirl marks to disappear, returning the film to its original clarity.",
    categories: ["ppf", "features"]
  },
  
  // Window Tinting FAQs
  {
    question: "What window tint options do you offer?",
    answer: "We offer STEK window films in various shades and performance levels. Options include different VLT (visible light transmission) percentages, ceramic infrared rejection films, security films, and decorative films. Each is available for automotive, residential, and commercial applications.",
    categories: ["window tinting", "product info"]
  },
  {
    question: "What are the benefits of window tinting?",
    answer: "Window tinting provides multiple benefits: UV protection (blocks up to 99% of harmful rays), heat reduction (up to 70% of solar heat), glare reduction, privacy enhancement, safety (holds shattered glass together), and interior preservation. It also helps reduce energy costs in homes and buildings.",
    categories: ["window tinting", "benefits"]
  },
  {
    question: "What are the legal tint limits in the Cayman Islands?",
    answer: "In the Cayman Islands, the legal limit for automotive window tinting is 35% VLT (Visible Light Transmission) for front side windows, and there are no restrictions for rear side windows and rear windshield. The front windshield may only have a tint strip across the top. Our professionals ensure all installations comply with local regulations.",
    categories: ["window tinting", "legal", "automotive"]
  },
  {
    question: "How long does window tint installation take?",
    answer: "Window tint installation typically takes 2-4 hours for a complete vehicle. Residential and commercial installations vary based on the number and size of windows being treated. We provide specific time estimates when scheduling your appointment.",
    categories: ["window tinting", "installation"]
  },
  {
    question: "How should I care for newly installed window tint?",
    answer: "For the first few days after installation, keep windows closed to allow the film to cure properly. Avoid cleaning the windows for at least one week. After curing, clean with a soft cloth and ammonia-free cleaner. Never use abrasive materials or razor blades on tinted windows.",
    categories: ["window tinting", "maintenance"]
  },
  
  // General Business FAQs
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment through our website booking system, by calling us directly, or emailing our customer service team. For complex services like ceramic coating or PPF, we recommend a consultation first to assess your vehicle's specific needs.",
    categories: ["business", "appointments"]
  },
  {
    question: "Do you offer any warranties or guarantees?",
    answer: "Yes, we offer warranties on all our professional services. Ceramic Pro ION coatings come with package-dependent warranties from 2 to 5+ years. STEK PPF carries a manufacturer's warranty of 5-10 years depending on the product line. Window tinting includes a lifetime warranty against bubbling, peeling, and color change. Detailing services are guaranteed for customer satisfaction.",
    categories: ["business", "warranty"]
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept cash, major credit cards, debit cards, and mobile payment options. For larger services, financing options may be available. Commercial accounts can be set up for businesses with multiple vehicles.",
    categories: ["business", "payment"]
  },
  {
    question: "Do you work on exotic and luxury vehicles?",
    answer: "Absolutely! Our technicians are specifically trained to work on high-end, exotic, and luxury vehicles. We understand these vehicles require special care and attention, and we use techniques and products suitable for their premium finishes.",
    categories: ["detailing", "luxury"]
  },
  {
    question: "Can I get a quote before booking a service?",
    answer: "Yes, we provide free quotes for all our services. For standard detailing packages, prices are listed on our website. For custom services, ceramic coating, PPF, or window tinting, we recommend a vehicle assessment to provide an accurate quote based on your specific requirements.",
    categories: ["business", "pricing"]
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>(faqData);
  const [activeTab, setActiveTab] = useState("all");

  // Filter FAQs based on search query and active tab
  useEffect(() => {
    const results = faqData.filter((faq) => {
      const matchesSearch = 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesTab = 
        activeTab === "all" || 
        faq.categories.some(category => category.toLowerCase().includes(activeTab.toLowerCase()));
        
      return matchesSearch && matchesTab;
    });
    
    setFilteredFAQs(results);
  }, [searchQuery, activeTab]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24 md:pt-32">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                Frequently Asked <span className="text-detailpros-pink">Questions</span>
              </h1>
              <p className="text-lg mb-10 text-center max-w-2xl mx-auto">
                Find answers to our most commonly asked questions about our services. If you can't find what you're looking for, please contact us.
              </p>

              {/* Search Box */}
              <div className="relative mb-10">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-10 py-6 text-lg"
                />
              </div>

              {/* Category Tabs */}
              <Tabs defaultValue="all" className="mb-8" onValueChange={handleTabChange}>
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full mb-6">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="detailing">Detailing</TabsTrigger>
                  <TabsTrigger value="ceramic coating">Ceramic Coating</TabsTrigger>
                  <TabsTrigger value="ppf">PPF</TabsTrigger>
                  <TabsTrigger value="window tinting">Window Tinting</TabsTrigger>
                  <TabsTrigger value="marine">Marine</TabsTrigger>
                  <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
                  <TabsTrigger value="business">Business</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-0">
                  {filteredFAQs.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full">
                      {filteredFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left font-medium text-lg hover:text-detailpros-pink">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-base">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-xl font-medium">No results found</p>
                      <p className="text-gray-500 mt-2">
                        Try adjusting your search terms or browse by category
                      </p>
                    </div>
                  )}
                </TabsContent>

                {/* All other tab content will use the same filtered results based on tab selection */}
                {["detailing", "ceramic coating", "ppf", "window tinting", "marine", "maintenance", "business"].map((tab) => (
                  <TabsContent key={tab} value={tab} className="mt-0">
                    {filteredFAQs.length > 0 ? (
                      <Accordion type="single" collapsible className="w-full">
                        {filteredFAQs.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-medium text-lg hover:text-detailpros-pink">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    ) : (
                      <div className="text-center py-10">
                        <p className="text-xl font-medium">No results found</p>
                        <p className="text-gray-500 mt-2">
                          Try adjusting your search terms or browse by category
                        </p>
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>

              {/* Contact CTA */}
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-medium mb-4">Still have questions?</h3>
                <p className="mb-6">We're here to help! Contact our team for assistance.</p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[5px] text-sm font-medium bg-detailpros-pink hover:bg-opacity-90 text-white px-6 py-3"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
        <CallToAction />
      </main>
    </div>
  );
};

export default FAQ;
