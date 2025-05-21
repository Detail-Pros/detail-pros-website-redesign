
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

  try {
    // Parse the JSON body
    const data = JSON.parse(event.body);
    
    // Setup email transporter with more explicit configuration
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false
      }
    });
    
    // Promisify the sendMail method for async/await use
    const sendMail = promisify(transporter.sendMail.bind(transporter));

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
      from: `"DetailPros Careers" <${process.env.EMAIL_USER}>`,
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
        
        This is an automated message from the DetailPros careers page.
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
        
        <p><em>This is an automated message from the DetailPros careers page.</em></p>
        ${data.hasAttachments ? "<p><strong>Note:</strong> The applicant has attached files. Please contact them directly to request these files.</p>" : ""}
      `
    };

    // Send the email to DetailPros
    await sendMail(emailContent);

    // Send an acknowledgement to the applicant
    const acknowledgement = {
      from: `"DetailPros Careers" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Thank you for your application",
      text: `
        Dear ${data.firstName},
        
        Thank you for applying for the ${data.jobTitle} position at DetailPros.
        
        We have received your application and will review it shortly. If your qualifications match our requirements, we will contact you to schedule an interview.
        
        Best regards,
        The DetailPros Team
      `,
      html: `
        <p>Dear ${data.firstName},</p>
        
        <p>Thank you for applying for the <strong>${data.jobTitle}</strong> position at DetailPros.</p>
        
        <p>We have received your application and will review it shortly. If your qualifications match our requirements, we will contact you to schedule an interview.</p>
        
        <p>Best regards,<br>
        The DetailPros Team</p>
      `
    };

    // Send the acknowledgement email
    await sendMail(acknowledgement);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Application submitted successfully" })
    };
  } catch (error) {
    console.error("Error submitting application:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to submit application", details: error.message })
    };
  }
};
