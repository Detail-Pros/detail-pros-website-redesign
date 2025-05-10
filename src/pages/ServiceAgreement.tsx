
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

const ServiceAgreement = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-extrabold mb-6">Thank You For Booking!</h1>
        <p className="text-xl font-medium">Please Read Our Service Agreement Below.</p>
      </div>

      {/* Agreement Card */}
      <Card className="max-w-4xl mx-auto mb-16 shadow-md p-8 md:p-10">
        <h1 className="text-3xl font-bold mb-4">Detail Pros Service Agreement</h1>
        
        <p className="text-sm mb-8">
          By booking or using Detail Pros services, you ("Client" or "You") agree to the following terms and 
          conditions, forming a legal agreement between you and Wetworx Ltd. ("Contractor," "We," "Us," 
          or "Our").
        </p>

        <h2 className="text-2xl font-bold my-6">Firm Cancellation & Rescheduling Policy</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm mb-8">
          <li><span className="font-medium">More than 48 hours notice:</span> No fee.</li>
          <li><span className="font-medium">24-48 hours notice:</span> $50 fee.</li>
          <li><span className="font-medium">12-24 hours notice:</span> 50% of service amount, up to $250 fee.</li>
          <li><span className="font-medium">Less than 12 hours notice or no call/no show:</span> 100% of service amount, up to $250 fee.</li>
          <li><span className="font-medium">Client not present or vehicle unavailable upon arrival:</span> 100% of service amount, up to $250 fee.</li>
        </ul>

        <p className="text-sm mb-8">
          <span className="font-medium">Note:</span> Detail Pros reserves the right to cancel or reschedule appointments due to staffing, traffic, 
          weather, or equipment issues. This cancellation policy also applies to gift certificate 
          appointments. For any cancellation or missed appointment fees, the credit card on file will be 
          charged the applicable amount.
        </p>

        <h2 className="text-2xl font-bold my-6">Late Arrival</h2>
        <p className="text-sm mb-8">
          Detail Pros may arrive up to 30 minutes late due to tight schedules or traffic. We appreciate your 
          patience in such situations.
        </p>

        <h2 className="text-2xl font-bold my-6">Vehicle Access, Operation & Service Quality</h2>
        <p className="text-sm mb-8">
          By booking, you agree to provide Detail Pros personnel with access and keys to your vehicle to 
          perform services, including detailing, ceramic coating, tinting, PPF, wet sanding, and other 
          complex enhancements. We strive to maintain high-quality service standards. Any concerns 
          must be communicated within 24 hours of service completion. Concerns raised beyond this 
          timeframe or refusal to participate in the final inspection will not be addressed.
        </p>

        <h2 className="text-2xl font-bold my-6">Single Vehicle Policy for Full Detail Service</h2>
        <p className="text-sm mb-8">
          When booking a Full Detail service, this service is limited to one vehicle only. The Full Detail 
          service will not be split between multiple vehicles; both interior and exterior detailing will be 
          completed on the same single vehicle. Please ensure that the vehicle for which the full detail is 
          intended is available at the time of the appointment.
        </p>

        <h2 className="text-2xl font-bold my-6">Time-Based Service Policy</h2>
        <p className="text-sm mb-8">
          Our detailing services aim to provide Detail Pros quality work and time limit. We strive to complete as 
          much as possible within the booked timeframe, but extensive cleaning needs or heavily soiled 
          conditions may require additional time. If more time is needed, additional charges of $50 per 30 
          minutes will apply, with your approval. The service fee reflects the time and effort spent on your 
          vehicle, not a guarantee that all tasks will be completed within the initial time limit. Please let us 
          know your priorities during the pre-service consultation so we can focus on what matters most 
          to you.
        </p>

        <h2 className="text-2xl font-bold my-6">Accidents, Pre-Existing Conditions & Limitation Of Liability</h2>
        <p className="text-sm mb-8">
          Detail Pros will document any pre-existing damage before starting work but is not liable for 
          such conditions. If any damage occurs while in our care, we will notify you during the job. Our 
          liability is limited to the amount paid for the specific service in question. Detail Pros is not 
          responsible for indirect, incidental, special, consequential, or punitive damages.
        </p>

        <h2 className="text-2xl font-bold my-6">Fees, Service Terms & Payment</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm mb-8">
          <li><span className="font-medium">Total Cost:</span> The fee is set at booking. Additional charges for wait time or extended time over 30 
          minutes will be discussed with you for approval.</li>
          <li><span className="font-medium">Payment:</span> Due upon completion of service (Credit, Debit, or Cash). Late payments incur a 10% fee 
          plus 0.5% daily interest until fully paid. You are responsible for legal Pros collection costs, if 
          applicable.</li>
          <li><span className="font-medium">Extra Dirty Fee:</span> If a job takes longer than anticipated, an extra dirty fee of $50 per additional 
          30 minutes may apply, at the discretion of Detail Pros.</li>
        </ul>

        <h2 className="text-2xl font-bold my-6">Access Requirements</h2>
        <p className="text-sm mb-8">
          To perform mobile detailing services, we require code/keys/password to access your gated 
          residence or vehicle. If access is unavailable upon arrival, a fee of up to 100 of the service 
          amount (capped at $250) will apply. If you're unsure about this access, please call (345) 
          929-9840 to reschedule.
        </p>

        <h2 className="text-2xl font-bold my-6">Shop Vehicle Storage & Late Pickup Fee</h2>
        <p className="text-sm mb-8">
          Once your vehicle is ready for pickup, you have 24 hours to retrieve it unless prior arrangements 
          are made. After the first 24 hours, a storage fee of 5% of the total service amount per day will 
          apply. Our shop operates on a tight schedule, and space is limited. We cannot accommodate 
          vehicles left for extended periods, as this impacts our ability to serve other customers. Please 
          make timely pickup arrangements to avoid additional fees.
        </p>

        <h2 className="text-2xl font-bold my-6">Safety</h2>
        <p className="text-sm mb-8">
          Please disclose any hazardous substances in your vehicle before detailing. You assume 
          responsibility for any health or safety risks associated with your vehicle.
        </p>

        <h2 className="text-2xl font-bold my-6">Feedback, Termination & Governing Law</h2>
        <p className="text-sm mb-8">
          We welcome your feedback at contact@detailpros.ky. By booking our services, you grant Detail 
          Pros permission to take photographs of your vehicle for marketing purposes, unless you object in 
          writing. This agreement is governed by Cayman Islands law. By booking Detail Pros services, 
          you confirm that you are authorized to agree to these terms on behalf of the vehicle's legal 
          owner and are 18 years of age or older. You agree to indemnify and hold Detail Pros harmless 
          from any claims or damages arising from a lack of authority to enter into this agreement.
        </p>

        <h2 className="text-2xl font-bold my-6">Mandatory Gratuity Fee</h2>
        <p className="text-sm mb-8">
          If you do not participate in the final quality control check and inspection at the end of the job, a 
          15% gratuity fee will be added to the invoice. This fee is non-negotiable if you are unable to 
          inspect the vehicle with the technician at the end of the job.
        </p>

        <h2 className="text-2xl font-bold my-6">Acknowledgements</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm mb-8">
          <li>By booking our services, you acknowledge that:</li>
          <li>Detail Pros does not guarantee any specific outcomes or results.</li>
          <li>Payment is for the time and effort spent servicing your vehicle, not tied to any specific 
          outcome.</li>
          <li>Detail Pros liability is limited to the total amount paid for the service.</li>
          <li>All Sales Are Final.</li>
        </ul>
      </Card>
    </div>
  );
};

export default ServiceAgreement;
