
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Header Section */}
      <div className="container mx-auto px-4 flex items-center min-h-[200px]">
        <div className="w-full">
          <h1 className="text-5xl font-bold text-black mb-4">Privacy Policy</h1>
          <p className="text-xl">How We Collect, Use, and Protect Your Information</p>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4">
        <Card className="rounded-md shadow-sm border-gray-100">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-4">Detail Pros Privacy Policy</h1>
            
            <p className="text-sm text-gray-700 mb-8">
              Last Updated: May 10, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-sm text-gray-700">
                Detail Pros ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our 
                website, use our mobile application, or interact with our services. Please read this privacy 
                policy carefully. If you do not agree with the terms of this privacy policy, please do not access 
                our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-sm text-gray-700 mb-4">
                We may collect information about you in various ways, including:
              </p>
              
              <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
              <p className="text-sm text-gray-700 mb-4">
                When using our services, we may ask you to provide us with certain personally identifiable 
                information that can be used to contact or identify you ("Personal Data"). This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                <li>Contact information (name, email address, phone number)</li>
                <li>Vehicle information (make, model, year, VIN, license plate)</li>
                <li>Address and location information</li>
                <li>Payment information</li>
                <li>Photos of your vehicle</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Usage Data</h3>
              <p className="text-sm text-gray-700 mb-4">
                We may also collect information about how our services are accessed and used ("Usage Data"). 
                This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                <li>Your computer's IP address</li>
                <li>Browser type and version</li>
                <li>Pages of our services that you visit</li>
                <li>Time and date of your visit</li>
                <li>Time spent on those pages</li>
                <li>Other diagnostic data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Use of Your Information</h2>
              <p className="text-sm text-gray-700 mb-4">
                We may use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and complete transactions</li>
                <li>Send you service-related information and communications</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Understand how users interact with our services</li>
                <li>Develop new products and services</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
                <li>Protect our rights, property, and safety, and the rights, property, and safety of our users or others</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Disclosure of Your Information</h2>
              <p className="text-sm text-gray-700 mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                <li><span className="font-medium">With Service Providers:</span> We may share your information with third-party vendors and service providers that perform services for us or on our behalf.</li>
                <li><span className="font-medium">For Business Transfers:</span> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                <li><span className="font-medium">With Your Consent:</span> We may disclose your personal information for any other purpose with your consent.</li>
                <li><span className="font-medium">Legal Requirements:</span> We may disclose your information where required by law or if we believe that such action is necessary to comply with the law and reasonable requests of law enforcement.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
              <p className="text-sm text-gray-700">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of your personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-sm text-gray-700 mt-4">
                To exercise any of these rights, please contact us at contact@detailpros.ky.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-sm text-gray-700">
                We have implemented appropriate technical and organizational security measures designed to 
                protect the security of any personal information we process. However, please also remember 
                that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to 
                protect your personal information, transmission of personal information to and from our 
                services is at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-sm text-gray-700">
                We may use cookies, web beacons, tracking pixels, and other tracking technologies to help 
                customize our services and improve your experience. When you access our services, your 
                personal information is not collected through the use of tracking technology. Most browsers are 
                set to accept cookies by default. You can remove or reject cookies, but be aware that such 
                action could affect the availability and functionality of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Websites</h2>
              <p className="text-sm text-gray-700">
                Our services may contain links to third-party websites and applications that are not owned or 
                controlled by us. We have no control over, and assume no responsibility for, the content, 
                privacy policies, or practices of any third-party websites or services. We advise you to read the 
                privacy policies of each website you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-sm text-gray-700">
                Our services are not directed to anyone under the age of 16. We do not knowingly collect 
                personally identifiable information from anyone under the age of 16. If you are a parent or 
                guardian and you are aware that your child has provided us with Personal Data, please contact 
                us. If we become aware that we have collected Personal Data from children without verification 
                of parental consent, we take steps to remove that information from our servers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-sm text-gray-700">
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of 
                this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. 
                Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-sm text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mt-4">
                <li>Email: contact@detailpros.ky</li>
                <li>Phone: (345) 929-9840</li>
                <li>Address: Unit E33 Kingbird Warehouses, 64 Kingbird Drive, George Town, Cayman Islands</li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
