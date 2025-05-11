
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CallToAction from "@/components/home/CallToAction";
import { Anchor, Shield, Droplet, CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";
const CeramicCoatingMarine = () => {
  return <div className="min-h-screen flex flex-col">
      {/* Header Banner */}
      <section className="w-full bg-black text-white py-16 relative z-10 mt-[-72px] md:mt-[-108px] pt-[100px] md:pt-[140px]">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 md:text-5xl">Marine Surface Protection</h1>
          <p className="text-xl max-w-2xl text-gray-400 md:text-sm">
            Ceramic Pro Marine provides excellent surface protection for your boat.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="text-white py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold mb-2 uppercase text-black md:text-4xl">
                THE MOST COMPLETE PROTECTIVE COATING FOR THE MARINE INDUSTRY
              </h1>
              <p className="mb-8 text-xl uppercase text-gray-700">NO OTHER COATING SYSTEM COMES CLOSE</p>
              
              <p className="mb-8 font-normal text-black">
                Ceramic Pro Marine is the worlds first all inclusive preventative maintenance product line specially designed for professionals. Our specialized application centers enables trained and certified professional installers to Apply Ceramic Pro Marine to all surfaces on your boat. Ceramic Pro Marine's cutting edge protective technology is the common sense choice in an industry where boat stands for "Bust Out Another Thousand." Stop spending thousands of dollars on aftercare.
              </p>
              
              <Button className="bg-detailpros-pink hover:bg-detailpros-pink/90 text-white px-8 py-3 h-auto text-lg rounded-none">
                Request A Quote
              </Button>
            </div>
            <div className="lg:w-1/3 relative">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <img src="/lovable-uploads/384ffb1a-2aa0-4dbe-940d-34dd72b25512.png" alt="Marine vessel on water" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center uppercase">CERAMIC PRO COMPARED TO THE REST</h2>
          
          <div className="overflow-x-auto mb-16">
            <img alt="Comparison Table" className="max-w-full h-auto mx-auto" src="/lovable-uploads/7454da2f-c271-4bb5-a45a-102d8fb9ff75.jpg" />
          </div>
        </div>
      </section>

      {/* Unmatched Protection Title - Moved up 5 sections */}
      <section className="py-10 bg-detailpros-pink text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center uppercase">UNMATCHED PROTECTION</h2>
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

       {/* The Ceramic Pro System - Moved up 2 positions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center uppercase">THE CERAMIC PRO SYSTEM</h2>
          
          <div className="flex justify-center mb-16">
            <img alt="Ceramic Pro System Layers" className="max-w-full h-auto" src="/lovable-uploads/89207da3-0b9e-46cf-bf3e-dd6d7e1a14a0.jpg" />
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
                <img alt="Scratch Resistance" className="w-full h-48 object-cover" src="/lovable-uploads/f2898798-522a-4f58-9c64-ee844fae00f4.jpg" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">Scratch and Resistance</h3>
              <p className="text-sm">
                Ceramic Pro brings strength to the table. This nano-ceramic coating can fortify any surface against scuffs and scratches. Even damage to the coating can be quickly and easily remedied. This comes in very handy on expensive enclosures and electronic screens.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img alt="Flexibility" className="w-full h-48 object-cover" src="/lovable-uploads/0674c937-ef04-4c28-bd14-8079ae10822b.jpg" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">Flexibility</h3>
              <p className="text-sm">
                Ceramic Pro has proven to be a perfect coating for surfaces exposed to expansion and deformation such as the flexing of a fiberglass hull. The coating wont crack or flake like acrylic sealants. This also allows Ceramic Pro to be applied to upholstery and roll-up enclosures.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img alt="Durability" className="w-full h-48 object-cover" src="/lovable-uploads/48e157d7-e82e-4a0f-8c96-a8bbbdff1442.jpg" />
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
                <img alt="Ultimate Gloss" className="w-full h-48 object-cover" src="/lovable-uploads/145c28a8-c6c2-4297-b391-39186146a4fa.jpg" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">Ultimate Gloss & Shine - Keep the Clean Look</h3>
              <p className="text-sm">
                Once coated with Ceramic Pro your boat will stand out from all others. The shine and color depth on a Ceramic Pro vessel is something to behold. Ceramic Pro, unline wax, provides a permanent shine. The results are truly eye-catching.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img alt="Less Maintenance" className="w-full h-48 object-cover" src="/lovable-uploads/69c4da11-73fc-4e84-abf3-b35b815ff06b.jpg" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">Less Maintenance</h3>
              <p className="text-sm">
                Once cured, the coating gets very hydrophobic (water repellent); water rolls off the surface and grabs dirt and grime. This is known as the self-cleaning effect. Hand Washing will be extremely easy and the need for heavy detergents and chemicals are now, in most cases, obsolete.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img alt="Increased Speed" className="w-full h-48 object-cover" src="/lovable-uploads/5446ba83-985d-434d-a70e-cfff43bd8e87.jpg" />
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
                <img alt="Hydrophobicity" className="w-full h-48 object-cover" src="/lovable-uploads/6112293b-69a0-4e32-b386-e6a6667b8aec.jpg" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">Hydrophobicity</h3>
              <p className="text-sm">
                Ceramic Pro products exhibit the same characteristics found on many plants around the world, yielding extreme hydrophobicity and long-term protection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img alt="UV Protection" className="w-full h-48 object-cover" src="/lovable-uploads/e20f5cec-bc63-49b8-a07c-33c611974fa8.jpg" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">UV Protection</h3>
              <p className="text-sm">
                The UV protection built inside of Ceramic Pro protects gelcoat, paint, rubbers and plastics against aging and fading colors. With Ceramic Pro your boat will sustain that "brand new" appeal with minimal future maintenance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img alt="Barrier against Saltwater" className="w-full h-48 object-cover" src="/lovable-uploads/e7846c22-9102-4702-91c0-3ed787cfa685.jpg" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">Barrier against Saltwater, Scum, Oxidation, Exhaust, Stains & Chemicals</h3>
              <p className="text-sm">
                Based on the "lotus-effect," this nano-ceramic allows us to create a smooth hydrophobic surface. This creates a consistent anti-stick factor making it easy to clean away fish gunk or other contaminants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Content Section - Now separate from title */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-4">
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
    </div>;
};
export default CeramicCoatingMarine;
