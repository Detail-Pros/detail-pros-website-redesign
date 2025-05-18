
import CallToAction from "@/components/home/CallToAction";
import { Car, Brush, DropletIcon, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Detailing = () => {
  return (
    <div className="min-h-screen flex flex-col">
        {/* Services Header */}
        <section className="bg-black text-white py-18">
          <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Auto Detailing Services
              </h1>
              <p className="text-sm text-gray-400">
                 Luxury detailing for your vehicle, delivered to your doorstep with precision and care.
              </p>
            </div>
        </section>

        {/* Mobile Detailing */}
        <section id="detailing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Car className="text-detailpros-pink mr-3" size={28} />
                  <h2 className="text-3xl font-bold">Mobile Detailing</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Our mobile detailing service brings professional car and boat care directly to your location across Grand Cayman.
                  We use premium products and techniques to restore and maintain your vehicle's appearance.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Exterior Detailing</h3>
                      <p className="text-sm text-gray-600">
                        Hand wash, clay bar treatment, paint decontamination, polish, and protective wax or sealant application.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Interior Detailing</h3>
                      <p className="text-sm text-gray-600">
                        Deep cleaning of all surfaces, steam cleaning, leather conditioning, odor elimination, and fabric protection.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Paint Correction</h3>
                      <p className="text-sm text-gray-600">
                        Professional removal of swirl marks, scratches, water spots, and oxidation to restore paint to showroom quality.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Marine Detailing</h3>
                      <p className="text-sm text-gray-600">
                        Specialized boat detailing with salt-specific treatments, hull cleaning, teak restoration, and protective coatings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img src="/placeholder.svg" alt="Mobile Detailing" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Detailing Services & Pricing Section - REDESIGNED */}
        <section id="mobile-detailing-services" className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Mobile Detailing Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the perfect detailing service for your vehicle. We offer comprehensive packages
                tailored to various vehicle types and your specific needs.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="inside-out" className="w-full">
                <div className="mb-10">
                  <TabsList className="w-full grid grid-cols-3 gap-2">
                    <TabsTrigger 
                      value="inside-out" 
                      className="flex flex-col gap-4 py-6 data-[state=active]:border-b-4 data-[state=active]:border-detailpros-pink rounded-lg"
                    >
                      <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full p-4 flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/dd7f3090-a164-4094-8203-d8c0f503414f.png" 
                          alt="Inside & Out" 
                          className="w-16 h-16 object-contain" 
                        />
                      </div>
                      <span className="font-medium">Inside & Out</span>
                    </TabsTrigger>
                    
                    <TabsTrigger 
                      value="exterior-only"
                      className="flex flex-col gap-4 py-6 data-[state=active]:border-b-4 data-[state=active]:border-detailpros-pink rounded-lg"
                    >
                      <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full p-4 flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/0ba47bc7-3c87-4b93-92e5-efbe316aa969.png" 
                          alt="Exterior Only" 
                          className="w-16 h-16 object-contain" 
                        />
                      </div>
                      <span className="font-medium">Exterior Only</span>
                    </TabsTrigger>
                    
                    <TabsTrigger 
                      value="interior-only"
                      className="flex flex-col gap-4 py-6 data-[state=active]:border-b-4 data-[state=active]:border-detailpros-pink rounded-lg"
                    >
                      <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full p-4 flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/85a41313-83c2-4644-8e39-4d1504770b91.png" 
                          alt="Interior Only" 
                          className="w-16 h-16 object-contain" 
                        />
                      </div>
                      <span className="font-medium">Interior Only</span>
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <div className="bg-white shadow-lg rounded-xl border border-gray-100">
                  <TabsContent value="inside-out" className="p-0 m-0">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 bg-detailpros-pink/10 rounded-full flex items-center justify-center">
                          <Car className="h-6 w-6 text-detailpros-pink" />
                        </div>
                        <h3 className="text-xl font-semibold">Inside & Out Detailing</h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Our comprehensive Inside & Out detailing service includes thorough cleaning of both 
                        the interior and exterior of your vehicle, ensuring it looks immaculate inside and out.
                      </p>
                      
                      <div className="overflow-x-auto bg-gray-50 rounded-lg">
                        <Table>
                          <TableHeader className="bg-gray-100">
                            <TableRow>
                              <TableHead className="w-1/3 py-4">Vehicle Type</TableHead>
                              <TableHead className="py-4">What's Included</TableHead>
                              <TableHead className="text-right py-4">Price</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d98eebb7-e06e-48bf-aaaf-3fac841fe362.png" alt="Coupe" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Coupe</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Complete interior & exterior cleaning with premium products</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$35.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d98eebb7-e06e-48bf-aaaf-3fac841fe362.png" alt="Sedan" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Sedan</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Complete interior & exterior cleaning with premium products</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$45.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/343ce067-29bc-42bb-bae4-34307ae5521d.png" alt="SUV 5-Seater" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">SUV 5-Seater</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Complete interior & exterior cleaning with premium products</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$55.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/54752ea2-a146-4c59-b7a5-7c8f0d0581d9.png" alt="SUV 7-Seater" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">SUV 7-Seater</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Complete interior & exterior cleaning with premium products</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$65.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/b1cddb91-3917-4776-8ec6-556216ea0334.png" alt="Truck" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Truck</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Complete interior & exterior cleaning with premium products</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$75.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d99657f5-e4df-4f22-a980-670efe2e2c07.png" alt="Van" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Van</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Complete interior & exterior cleaning with premium products</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$100.00</span>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="exterior-only" className="p-0 m-0">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 bg-detailpros-pink/10 rounded-full flex items-center justify-center">
                          <Brush className="h-6 w-6 text-detailpros-pink" />
                        </div>
                        <h3 className="text-xl font-semibold">Exterior Only Detailing</h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Our Exterior Only detailing service focuses on making your vehicle's exterior shine with 
                        professional washing, waxing, and treatment of all external surfaces.
                      </p>
                      
                      <div className="overflow-x-auto bg-gray-50 rounded-lg">
                        <Table>
                          <TableHeader className="bg-gray-100">
                            <TableRow>
                              <TableHead className="w-1/3 py-4">Vehicle Type</TableHead>
                              <TableHead className="py-4">What's Included</TableHead>
                              <TableHead className="text-right py-4">Price</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d98eebb7-e06e-48bf-aaaf-3fac841fe362.png" alt="Coupe" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Coupe</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Professional exterior washing, waxing and protection</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$25.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d98eebb7-e06e-48bf-aaaf-3fac841fe362.png" alt="Sedan" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Sedan</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Professional exterior washing, waxing and protection</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$35.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/343ce067-29bc-42bb-bae4-34307ae5521d.png" alt="SUV 5-Seater" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">SUV 5-Seater</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Professional exterior washing, waxing and protection</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$40.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/54752ea2-a146-4c59-b7a5-7c8f0d0581d9.png" alt="SUV 7-Seater" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">SUV 7-Seater</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Professional exterior washing, waxing and protection</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$45.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/b1cddb91-3917-4776-8ec6-556216ea0334.png" alt="Truck" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Truck</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Professional exterior washing, waxing and protection</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$50.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d99657f5-e4df-4f22-a980-670efe2e2c07.png" alt="Van" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Van</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Professional exterior washing, waxing and protection</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$60.00</span>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="interior-only" className="p-0 m-0">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 bg-detailpros-pink/10 rounded-full flex items-center justify-center">
                          <DropletIcon className="h-6 w-6 text-detailpros-pink" />
                        </div>
                        <h3 className="text-xl font-semibold">Interior Only Detailing</h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Our Interior Only detailing service provides deep cleaning of all interior surfaces, 
                        including seats, dashboard, carpets, and more to restore that new car feel.
                      </p>
                      
                      <div className="overflow-x-auto bg-gray-50 rounded-lg">
                        <Table>
                          <TableHeader className="bg-gray-100">
                            <TableRow>
                              <TableHead className="w-1/3 py-4">Vehicle Type</TableHead>
                              <TableHead className="py-4">What's Included</TableHead>
                              <TableHead className="text-right py-4">Price</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d98eebb7-e06e-48bf-aaaf-3fac841fe362.png" alt="Coupe" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Coupe</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Deep interior cleaning, conditioning and sanitizing</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$20.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d98eebb7-e06e-48bf-aaaf-3fac841fe362.png" alt="Sedan" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Sedan</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Deep interior cleaning, conditioning and sanitizing</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$25.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/343ce067-29bc-42bb-bae4-34307ae5521d.png" alt="SUV 5-Seater" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">SUV 5-Seater</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Deep interior cleaning, conditioning and sanitizing</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$30.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/54752ea2-a146-4c59-b7a5-7c8f0d0581d9.png" alt="SUV 7-Seater" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">SUV 7-Seater</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Deep interior cleaning, conditioning and sanitizing</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$35.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/b1cddb91-3917-4776-8ec6-556216ea0334.png" alt="Truck" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Truck</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Deep interior cleaning, conditioning and sanitizing</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$40.00</span>
                              </TableCell>
                            </TableRow>
                            
                            <TableRow className="hover:bg-gray-50">
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <img src="/lovable-uploads/d99657f5-e4df-4f22-a980-670efe2e2c07.png" alt="Van" className="w-14 h-10 object-contain" />
                                  <span className="font-medium">Van</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4 text-gray-600">Deep interior cleaning, conditioning and sanitizing</TableCell>
                              <TableCell className="text-right py-4">
                                <span className="font-bold text-lg text-detailpros-black">$50.00</span>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </TabsContent>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">
                    Contact us for custom requirements or additional detailing services.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-detailpros-pink hover:bg-opacity-90 px-8 py-6 text-base">
                      Request A Quote
                    </Button>
                  </Link>
                </div>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Ceramic Pro Coating */}
        <section id="ceramic-coating" className="py-20 bg-detailpros-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img src="/lovable-uploads/8f535325-abf2-434c-aed0-61cd812383aa.png" alt="Ceramic Pro Coating" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <DropletIcon className="text-detailpros-pink mr-3" size={28} />
                  <h2 className="text-3xl font-bold">Ceramic Pro Coating</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  As authorized installers of Ceramic Pro in the Cayman Islands, we provide industry-leading ceramic 
                  coating solutions that offer unparalleled protection against the harsh Caribbean elements.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">9H Hardness Protection</h3>
                      <p className="text-sm text-gray-600">
                        Superior scratch resistance and protection with the hardest coating available in the automotive industry.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Hydrophobic Surface</h3>
                      <p className="text-sm text-gray-600">
                        Extreme water repellency that prevents water spots, makes cleaning easier, and maintains a cleaner vehicle.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">UV & Chemical Resistance</h3>
                      <p className="text-sm text-gray-600">
                        Protection from the Caribbean sun's UV rays, salt air, and environmental contaminants that damage paint.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Warranty Options</h3>
                      <p className="text-sm text-gray-600">
                        Various packages available with warranties ranging from 2 years to lifetime protection.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link to="/ceramic-coating/automotive">
                  <Button className="bg-detailpros-pink hover:bg-opacity-90">
                    Learn More About ION
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PPF & Window Tinting */}
        <section id="ppf-tinting" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Brush className="text-detailpros-pink mr-3" size={28} />
                  <h2 className="text-3xl font-bold">PPF & Window Tinting</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  We're certified installers of STEK paint protection film and high-quality window tinting, 
                  providing maximum protection from rock chips, scratches, and the Caribbean sun.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">STEK Paint Protection Film</h3>
                      <p className="text-sm text-gray-600">
                        Self-healing film that protects against rock chips, scratches, and environmental damage while maintaining paint clarity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Custom Installation</h3>
                      <p className="text-sm text-gray-600">
                        Precision cut and installed PPF for full vehicle coverage or targeted high-impact areas like bumpers and hood.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Ceramic Window Tinting</h3>
                      <p className="text-sm text-gray-600">
                        Advanced ceramic technology that blocks up to 99% of UV rays and significantly reduces interior heat.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-detailpros-pink mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Legal Compliance</h3>
                      <p className="text-sm text-gray-600">
                        All window tinting is installed to comply with Cayman Islands legal requirements while maximizing protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img src="/placeholder.svg" alt="PPF and Window Tinting" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
    </div>
  );
};

export default Detailing;
