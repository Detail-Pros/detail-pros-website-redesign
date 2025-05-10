
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import CallToAction from "@/components/home/CallToAction";
import { Play, Anchor, Shield, Droplet, Sun, Umbrella, CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";

const CeramicCoatingMarine = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-2/3">
              <h1 className="text-4xl md:text-6xl font-bold mb-2 uppercase">
                THE MOST COMPLETE PROTECTIVE COATING FOR THE MARINE INDUSTRY
              </h1>
              <p className="text-gray-400 mb-8 text-xl uppercase">NO OTHER COATING SYSTEM COMES CLOSE</p>
              
              <p className="text-gray-200 mb-8">
                Ceramic Pro Marine is the worlds first all inclusive preventative maintenance product line specially designed for professionals. Our specialized application centers enables trained and certified professional installers to Apply Ceramic Pro Marine to all surfaces on your boat. Ceramic Pro Marine's cutting edge protective technology is the common sense choice in an industry where boat stands for "Bust Out Another Thousand." Stop spending thousands of dollars on aftercare.
              </p>
              
              <Button className="bg-detailpros-pink hover:bg-detailpros-pink/90 text-white px-8 py-3 h-auto text-lg rounded-none">
                Request A Quote
              </Button>
            </div>
            <div className="lg:w-1/3 relative">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
                <img 
                  src="/lovable-uploads/384ffb1a-2aa0-4dbe-940d-34dd72b25512.png" 
                  alt="Marine vessel on water" 
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="rounded-full bg-detailpros-pink/90 p-4 text-white hover:bg-detailpros-pink transition-colors">
                    <Play size={40} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ceramic Pro System */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center uppercase">THE CERAMIC PRO SYSTEM</h2>
          
          <div className="flex justify-center mb-16">
            <img 
              src="/lovable-uploads/1aa7089b-0993-429f-aec1-a63ff96d38a5.png" 
              alt="Ceramic Pro System Layers" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center uppercase">CERAMIC PRO COMPARED TO THE REST</h2>
          
          <div className="overflow-x-auto mb-16">
            <img 
              src="/lovable-uploads/a144dd89-bd62-40e5-bf7e-1a81aa671af5.png" 
              alt="Comparison Table" 
              className="max-w-full h-auto mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section 1 - Gold Background */}
      <section className="py-16 bg-amber-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">UV RAY SHIELD</h3>
              <p className="text-sm">
                Ceramic Pro Marine utilizes a revolutionary blend of UV inhibiting minerals to protect your vessel from the harshest sun rays on the planet.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">OXIDATION BARRIER</h3>
              <p className="text-sm">
                Ceramic Pro Marine is a layerable product that starts with a penetrating foundation that can built up creating a protective layer that seals your gelcoat.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Anchor className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">FOULING RELEASE</h3>
              <p className="text-sm">
                Ceramic Pro Marine reduces the surface tension of your gelcoat preventing algae from planting roots into the pores of your gelcoat making growth very easy to remove.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Droplet className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">SELF CLEANING</h3>
              <p className="text-sm">
                Ceramic Pro Marine's protective layer reduces the surface tension of surfaces allowing bird droppings, fish blood, oil and other grime to be easily washed away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section 2 - Black Background */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CircleCheck className="h-12 w-12 text-detailpros-pink" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">HIGH GLOSS</h3>
              <p className="text-sm">
                Ceramic Pro Marine is available in High Gloss finish that Exceeds OEM paint or gelcoat quality. This means your boat will be glossier than the day you bought it.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-detailpros-pink" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">DURABILITY</h3>
              <p className="text-sm">
                Ceramic Pro Marine is the most durable protective coating available for your boat. Our products can not be washed away or removed thru environmental hazards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-detailpros-pink" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">VERSATILITY</h3>
              <p className="text-sm">
                Ceramic Pro Marine is the most versatile coating on the planet. With its wide range of uses there is literally no surface on your boat that can be left unprotected.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CircleCheck className="h-12 w-12 text-detailpros-pink" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">WARRANTY</h3>
              <p className="text-sm">
                We offer proven and reliable warranties because we believe your experience with Ceramic Pro Marine should be the same on day one as years down the line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section 3 - Triple Columns */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="mb-4">
                <img src="/lovable-uploads/6f41bfe0-7647-4676-97ee-b409e593e7a1.png" alt="Scratch Resistance" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">Scratch and Resistance</h3>
              <p className="text-sm">
                Ceramic Pro brings strength to the table. This nano-ceramic coating can fortify any surface against scuffs and scratches. Even damage to the coating can be quickly and easily remedied. This comes in very handy on expensive enclosures and electronic screens.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img src="/lovable-uploads/6f41bfe0-7647-4676-97ee-b409e593e7a1.png" alt="Flexibility" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">Flexibility</h3>
              <p className="text-sm">
                Ceramic Pro has proven to be a perfect coating for surfaces exposed to expansion and deformation such as the flexing of a fiberglass hull. The coating wont crack or flake like acrylic sealants. This also allows Ceramic Pro to be applied to upholstery and roll-up enclosures.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img src="/lovable-uploads/6f41bfe0-7647-4676-97ee-b409e593e7a1.png" alt="Durability" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">Durability</h3>
              <p className="text-sm">
                The durability depends on many factors but we feel confident that Ceramic Pro will last 1-3 years above the waterline as long as the coating is maintained accordingly and not exposed to an abnormal amount of abrasion.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="mb-4">
                <img src="/lovable-uploads/5cd9875f-2e18-4857-a930-5c08e8a52534.png" alt="Ultimate Gloss" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">Ultimate Gloss & Shine - Keep the Clean Look</h3>
              <p className="text-sm">
                Once coated with Ceramic Pro your boat will stand out from all others. The shine and color depth on a Ceramic Pro vessel is something to behold. Ceramic Pro, unline wax, provides a permanent shine. The results are truly eye-catching.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img src="/lovable-uploads/5cd9875f-2e18-4857-a930-5c08e8a52534.png" alt="Less Maintenance" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">Less Maintenance</h3>
              <p className="text-sm">
                Once cured, the coating gets very hydrophobic (water repellent); water rolls off the surface and grabs dirt and grime. This is known as the self-cleaning effect. Hand Washing will be extremely easy and the need for heavy detergents and chemicals are now, in most cases, obsolete.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img src="/lovable-uploads/5cd9875f-2e18-4857-a930-5c08e8a52534.png" alt="Increased Speed" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">Bottom Line - Increased Top Speed & Fuel Economy</h3>
              <p className="text-sm">
                The most unique function of the Ceramic Pro Marine System is the ability to reduce drag when applied to the hull bottom. Proven in the manufacturer industry, this coating reduces surface tensions, creating higher speeds at cruising RPM's.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <img src="/lovable-uploads/427aff3a-f98a-4404-afab-30d1ba1eac00.png" alt="Hydrophobicity" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">Hydrophobicity</h3>
              <p className="text-sm">
                Ceramic Pro products exhibit the same characteristics found on many plants around the world, yielding extreme hydrophobicity and long-term protection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img src="/lovable-uploads/427aff3a-f98a-4404-afab-30d1ba1eac00.png" alt="UV Protection" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">UV Protection</h3>
              <p className="text-sm">
                The UV protection built inside of Ceramic Pro protects gelcoat, paint, rubbers and plastics against aging and fading colors. With Ceramic Pro your boat will sustain that "brand new" appeal with minimal future maintenance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img src="/lovable-uploads/427aff3a-f98a-4404-afab-30d1ba1eac00.png" alt="Barrier against Saltwater" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">Barrier against Saltwater, Scum, Oxidation, Exhaust, Stains & Chemicals</h3>
              <p className="text-sm">
                Based on the "lotus-effect," this nano-ceramic allows us to create a smooth hydrophobic surface. This creates a consistent anti-stick factor making it easy to clean away fish gunk or other contaminants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unmatched Protection */}
      <section className="py-16 bg-detailpros-pink text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center uppercase">UNMATCHED PROTECTION</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <p className="mb-4">
                Ceramic Pro offers protection for both the underwater and above water parts of any boat or yacht. Harsh conditions of the underwater environment are a well-known problem to boat expert and lovers. Ceramic Pro offers protection against the corrosion created by salt water and the fouling on the hull caused by the accumulation of algae and/or shells.
              </p>
              <p>
                Today's procedures to clean the boats' hull are exhausting and not very environmentally friendly. Our ceramic coating will make the surface so repellent to the harsh underwater elements that the cleaning process will no longer be a problem. Today, our Ceramic Pro products are protecting boats around world.
              </p>
            </div>
            <div>
              <p className="mb-4">
                With the use of advanced nano-technology, Ceramic Pro delivers a product that will improve your vessels performance while protecting it from the elements. This product cannot be compared to anything currently on the market and has to be placed in its own category.
              </p>
              <p>
                Once the Ceramic Pro marine system has been applied to a surface, the need for waxes and other off-the-shelf protective products becomes obsolete. Ceramic Pro is a clear, non-yellowing, liquid nano-ceramic coating. When cured, this technology will transform itself on the surface to become a rigid, flexible super-slick glass shield, bonding to and protecting the substrate. Ceramic Pro is not chemically removable by high-detergents or acids.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />
    </div>
  );
};

export default CeramicCoatingMarine;
