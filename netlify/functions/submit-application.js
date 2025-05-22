
// Netlify serverless function to handle job applications
const nodemailer = require('nodemailer');
const { promisify } = require('util');

exports.handler = async function(event, context) {
  // Only allow POST method
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  console.log("Function started");

  try {
    // Parse the JSON body
    const data = JSON.parse(event.body);
    console.log("Received application data:", JSON.stringify(data));
    
    // Setup email transporter with explicit debugging
    console.log("Setting up email transport with:", {
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      auth: {
        user: process.env.EMAIL_USER
      }
    });
    
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      debug: true, // Enable debugging
      logger: true // Log to console
    });
    
    // Create the email content
    const jobInfo = `
      Position: ${data.jobTitle}
      Department: ${data.jobDepartment}
      Location: ${data.jobLocation}
      Job ID: ${data.jobId}
    `;

    const applicantInfo = `
      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Phone: ${data.phone}
    `;

    const emailContent = {
      from: `"Detail Pros Careers" <${process.env.EMAIL_USER}>`,
      to: "contact@detailpros.ky",
      subject: `Job Application: ${data.jobTitle}`,
      text: `
        Job Application Details:
        
        ${jobInfo}
        
        Applicant Details:
        ${applicantInfo}
        
        Message:
        ${data.message}
        
        Marketing Consent: ${data.consentMarketing ? "Yes" : "No"}
        
        This is an automated message from the Detail Pros careers page.
        ${data.hasAttachments ? "\n\nThe applicant has attached files. Please contact them directly to request these files." : ""}
      `,
      html: `
        <h2>Job Application Details:</h2>
        <pre>${jobInfo}</pre>
        
        <h2>Applicant Details:</h2>
        <pre>${applicantInfo}</pre>
        
        <h2>Message:</h2>
        <p>${data.message}</p>
        
        <p><strong>Marketing Consent:</strong> ${data.consentMarketing ? "Yes" : "No"}</p>
        
        <p><em>This is an automated message from the Detail Pros careers page.</em></p>
        ${data.hasAttachments ? "<p><strong>Note:</strong> The applicant has attached files. Please contact them directly to request these files.</p>" : ""}
      `
    };

    try {
      console.log("Sending email to DetailPros");
      await transporter.sendMail(emailContent);
      console.log("Successfully sent email to DetailPros");

      // Send an acknowledgement to the applicant
      const acknowledgement = {
        from: `"Detail Pros Careers" <${process.env.EMAIL_USER}>`,
        to: data.email,
        subject: "Thank you for your application",
        text: `
          Dear ${data.firstName},
          
          Thank you for applying for the ${data.jobTitle} position at Detail Pros.
          
          We have received your application and will review it shortly. If your qualifications match our requirements, we will contact you to schedule an interview.
          
          Best regards,
          The Detail Pros Team
        `,
        html: `
          <p>Dear ${data.firstName},</p>
          
          <p>Thank you for applying for the <strong>${data.jobTitle}</strong> position at Detail Pros.</p>
          
          <p>We have received your application and will review it shortly. If your qualifications match our requirements, we will contact you to schedule an interview.</p>
          
          <p>Best regards,<br>
          The Detail Pros Team</p>
        `
      };

      console.log("Sending acknowledgement email to applicant");
      await transporter.sendMail(acknowledgement);
      console.log("Successfully sent acknowledgement email");

      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Application submitted successfully" })
      };
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: "Failed to send email", 
          details: emailError.message,
          stack: emailError.stack
        })
      };
    }
  } catch (error) {
    console.error("Error processing application:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to submit application", details: error.message })
    };
  }
};
