
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import CallToAction from "@/components/home/CallToAction";
import JobPostingCard, { JobPosting } from "@/components/careers/JobPostingCard";
import JobApplicationModal from "@/components/careers/JobApplicationModal";
import { Briefcase, User, FileText, Mail, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const jobs: JobPosting[] = [
  {
    id: "detailer-1",
    title: "Automotive Detailer",
    department: "Mobile Detailing",
    location: "Grand Cayman, Cayman Islands",
    type: "Full-time",
    description: "We are seeking skilled Automotive Detailers to join our mobile detailing team. In this role, you'll provide exceptional service at our clients' locations throughout Miami.",
    responsibilities: [
      "Travel to client locations to perform automotive detailing services",
      "Execute interior and exterior detailing procedures to meet Detail Pros' standards",
      "Properly use detailing equipment and ensure products are applied correctly",
      "Maintain inventory of products and supplies in mobile detailing vehicles",
      "Ensure client satisfaction and address any concerns professionally"
    ],
    requirements: [
      "3+ years of professional detailing experience preferred",
      "Valid driver's license with clean driving record",
      "Knowledge of proper detailing techniques and products",
      "Excellent customer service skills",
      "Ability to work long hours, weekend and holidays",
      "Ability to work independently and manage time effectively"
    ],
    salary: "$21,600 - $30,000" + "tips",
    postedDate: "May 15, 2025"
  },
  {
    id: "ceramic-specialist-1",
    title: "Ceramic Coating Specialist",
    department: "Ceramic Pro Installation",
    location: "Grand Cayman, Cayman Islands",
    type: "Full-time",
    description: "Join our team as a Ceramic Coating Specialist working with premium Ceramic Pro products. You'll be responsible for preparing, applying, and maintaining ceramic coatings on various vehicles.",
    responsibilities: [
      "Perform thorough paint correction procedures prior to coating application",
      "Apply Ceramic Pro coatings according to manufacturer specifications",
      "Educate customers on maintenance and care for their ceramic coatings",
      "Document work through before/after photography and detailed service reports",
      "Stay updated on the latest ceramic coating technologies and techniques"
    ],
    requirements: [
      "5+ years experience in professional detailing or automotive finishing",
      "Experience with paint correction and ceramic coating application",
      "Attention to detail and commitment to perfection",
      "Ability to stand for extended periods and work in various positions",
      "Willingness to complete Ceramic Pro certification training"
    ],
    salary: "$30,000 - $36,000/year",
    postedDate: "May 15, 2025"
  },
  {
    id: "ppf-installer-1",
    title: "Paint Protection Film Installer",
    department: "PPF Installation",
    location: "Grand Cayman, Cayman Islands",
    type: "Full-time",
    description: "We are looking for an experienced Paint Protection Film (PPF) Installer to join our team. You will be responsible for installing premium STEK PPF products on high-end vehicles.",
    responsibilities: [
      "Prepare vehicles for PPF installation including thorough cleaning",
      "Cut and install STEK PPF products with precision and attention to detail",
      "Handle custom PPF projects and special client requests",
      "Inspect completed work to ensure it meets quality standards",
      "Maintain a clean and organized workspace"
    ],
    requirements: [
      "7+ years experience in PPF installation",
      "Experience with plotter software and manual cutting techniques",
      "Knowledge of various PPF brands and their installation requirements",
      "Strong problem-solving skills and ability to adapt to challenging installations",
      "Portfolio of previous PPF installation work preferred"
    ],
    salary: "$30,000 - $36,000/year",
    postedDate: "May 15, 2025"
  },
  {
    id: "window-tint-1",
    title: "Window Tinting Technician",
    department: "Window Tinting",
    location: "Grand Cayman, Cayman Islands",
    type: "Full-time",
    description: "Detail Pros is seeking an experienced Window Tinting Technician to install window films on automotive, residential, and commercial properties.",
    responsibilities: [
      "Install window tint films on vehicles and buildings with precision",
      "Cut film to proper dimensions using computerized cutting systems and hand tools",
      "Consult with clients on tint options and Florida legal requirements",
      "Maintain quality control standards on all installations",
      "Keep up with the latest window film products and installation techniques"
    ],
    requirements: [
      "1+ years of professional window tinting experience",
      "Knowledge of state regulations regarding window tinting",
      "Experience with various types of window films",
      "Strong attention to detail and commitment to quality",
      "Professional appearance and excellent communication skills"
    ],
    salary: "$30,000 - $36,000/year",
    postedDate: "May 15, 2025"
  }
];

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApply = (jobId: string) => {
    const job = jobs.find((j) => j.id === jobId);
    if (job) {
      setSelectedJob(job);
      setIsApplicationModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Careers at Detail Pros | Join Our Professional Detailing Team</title>
        <meta name="description" content="Looking for a career in automotive detailing? Detail Pros is hiring for detailers, ceramic coating specialists, PPF installers and more. Apply today!" />
        <meta name="keywords" content="automotive careers, detailing jobs, ceramic coating careers, PPF installer jobs, window tinting technician, Miami jobs, automotive jobs" />
        <link rel="canonical" href="https://detailpros.com/careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our <span className="text-detailpros-pink">Team</span>
            </h1>
            <p className="text-lg mb-6">
              We're looking for passionate people who share our mission to deliver the highest quality automotive detailing services in Miami.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="bg-detailpros-pink p-2 rounded-full">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold">Professional Growth</p>
                  <p className="text-sm text-gray-300">Career advancement opportunities</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-detailpros-pink p-2 rounded-full">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold">Training Programs</p>
                  <p className="text-sm text-gray-300">Ongoing skill development</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-detailpros-pink p-2 rounded-full">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold">Certification Support</p>
                  <p className="text-sm text-gray-300">Industry certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover your next career opportunity at Detail Pros. We offer competitive pay, flexible schedules, and a supportive work environment.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto mb-10">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for jobs, departments, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="max-w-3xl mx-auto">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobPostingCard key={job.id} job={job} onApply={handleApply} />
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border">
                <p className="text-gray-600 mb-2">No jobs found matching your search criteria.</p>
                <p className="text-sm">Try adjusting your search or check back later for new opportunities.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Work With Us?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Culture</h3>
              <p className="mb-4 text-gray-700">
                At Detail Pros, we foster a culture of excellence, teamwork, and continuous improvement. We believe in creating an environment where every team member can thrive and grow professionally.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 mt-8">Benefits</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Competitive wages with performance bonuses</li>
                <li>Health insurance options for full-time employees</li>
                <li>Paid vacation and holidays</li>
                <li>Employee discounts on services and products</li>
                <li>Flexible scheduling options</li>
                <li>Training and certification opportunities</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What qualifications do I need?</AccordionTrigger>
                  <AccordionContent>
                    Requirements vary by position, but we generally look for candidates with experience in automotive detailing or related fields. Some positions require specific certifications or training that we may provide for the right candidate.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What is the application process?</AccordionTrigger>
                  <AccordionContent>
                    After submitting your application, our team will review your qualifications. If selected, you'll be contacted for an initial phone interview, followed by an in-person interview and possibly a skills demonstration depending on the position.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is there opportunity for advancement?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We believe in promoting from within and offer clear paths for career advancement. Many of our team leaders and specialists started in entry-level positions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you offer training?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we provide comprehensive training programs for all new hires. For specialized positions, we offer ongoing education and the opportunity to attend industry workshops and certification programs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Position?</h2>
          <p className="mb-6 text-gray-600">
            We're always looking for talented individuals to join our team. Send your resume, and we'll keep it on file for future opportunities.
          </p>
          <div className="inline-flex items-center justify-center gap-2 bg-black hover:bg-opacity-90 text-white px-6 py-3 rounded-md transition-colors">
            <Mail className="h-5 w-5" />
            <a href="mailto:careers@detailpros.com" className="font-medium">
              careers@detailpros.com
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
      
      {/* Application Modal */}
      <JobApplicationModal 
        job={selectedJob} 
        isOpen={isApplicationModalOpen} 
        onClose={() => setIsApplicationModalOpen(false)} 
      />
    </div>
  );
};

export default Careers;
