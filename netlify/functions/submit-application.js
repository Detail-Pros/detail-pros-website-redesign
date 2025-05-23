
// Netlify serverless function to handle job applications
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  // Set CORS headers for all responses - making sure they're very permissive
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Accept, Origin, X-Requested-With",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
    "Cache-Control": "no-store, no-cache, must-revalidate"
  };

  // Enhanced logging to help troubleshoot
  console.log(`Function invoked with method: ${event.httpMethod}`);
  console.log(`Headers: ${JSON.stringify(event.headers)}`);

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    console.log("Handling OPTIONS preflight request");
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }

  // Only allow POST method
  if (event.httpMethod !== 'POST') {
    console.log(`Rejecting ${event.httpMethod} method`);
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  console.log("Processing POST request");

  try {
    // Validate request body exists
    if (!event.body) {
      console.log("Missing request body");
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing request body" })
      };
    }
    
    // Parse the JSON body
    let data;
    try {
      data = JSON.parse(event.body);
      console.log("Received application data:", JSON.stringify(data));
    } catch (parseError) {
      console.error("Failed to parse JSON:", parseError);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid JSON format", details: parseError.message })
      };
    }
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'message'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      console.log(`Missing required fields: ${missingFields.join(', ')}`);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: "Missing required fields", 
          details: missingFields.join(', ')
        })
      };
    }
    
    // Log email credentials being used (without showing the password)
    console.log("Email configuration:", {
      host: process.env.EMAIL_HOST || 'missing host',
      port: process.env.EMAIL_PORT || 'missing port',
      secure: true,
      user: process.env.EMAIL_USER || 'missing user',
      auth: !!process.env.EMAIL_PASSWORD ? 'password provided' : 'missing password'
    });
    
    // Check if required environment variables are present
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Missing required email configuration");
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: "Server configuration error", 
          details: "Email service is not properly configured"
        })
      };
    }
    
    // Create transporter with more detailed logging
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      debug: true,
      logger: true,
      tls: {
        rejectUnauthorized: false // Only for development
      },
      connectionTimeout: 15000, // 15 seconds
      greetingTimeout: 10000,  // 10 seconds
      socketTimeout: 15000     // 15 seconds
    });
    
    // Verify connection configuration
    try {
      console.log("Verifying email connection...");
      await transporter.verify();
      console.log("Email connection successful");
    } catch (verifyError) {
      console.error("Email connection verification failed:", verifyError);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: "Email server connection failed", 
          details: verifyError.message
        })
      };
    }
    
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
      const mainEmailInfo = await transporter.sendMail(emailContent);
      console.log("Successfully sent email to DetailPros:", mainEmailInfo.response);

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
      const ackEmailInfo = await transporter.sendMail(acknowledgement);
      console.log("Successfully sent acknowledgement email:", ackEmailInfo.response);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          message: "Application submitted successfully",
          mainEmail: mainEmailInfo.response,
          ackEmail: ackEmailInfo.response
        })
      };
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      
      // Try to extract the most useful error information
      const errorDetails = {
        message: emailError.message,
        code: emailError.code,
        command: emailError.command,
        responseCode: emailError.responseCode,
        response: emailError.response
      };
      
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: "Failed to send email", 
          details: errorDetails
        })
      };
    }
  } catch (error) {
    console.error("Error processing application:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: "Failed to submit application", 
        details: error.message,
        stack: error.stack 
      })
    };
  }
};
