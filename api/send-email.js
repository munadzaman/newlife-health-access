const nodemailer = require('nodemailer');

// Create transporter using Gmail SMTP
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

const generateEmailTemplate = (type, data) => {
  if (type === 'appointment') {
    return {
      subject: 'New Appointment Booking - Newlife Medical Services',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-bottom: 20px; text-align: center;">New Appointment Booking</h2>
            
            <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e40af; margin-top: 0;">Patient Information</h3>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
            </div>
            
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #166534; margin-top: 0;">Appointment Details</h3>
              <p><strong>Clinic:</strong> ${data.clinic}</p>
              <p><strong>Service:</strong> ${data.service}</p>
              <p><strong>Doctor:</strong> ${data.doctor}</p>
              <p><strong>Preferred Date:</strong> ${data.date}</p>
              <p><strong>Preferred Time:</strong> ${data.time}</p>
            </div>
            
            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0; color: #92400e;"><strong>Submitted:</strong> ${data.submittedAt}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #6b7280; font-size: 14px;">
                Please contact the patient within 24 hours to confirm the appointment.
              </p>
            </div>
          </div>
        </div>
      `
    };
  } else if (type === 'investment') {
    return {
      subject: 'New Investment Interest - Newlife Medical Services',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-bottom: 20px; text-align: center;">New Investment Interest</h2>
            
            <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
              <p><strong>Full Name:</strong> ${data.fullName}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Telephone:</strong> ${data.telephone}</p>
            </div>
            
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #166534; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap;">${data.message}</p>
            </div>
            
            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0; color: #92400e;"><strong>Submitted:</strong> ${data.submittedAt}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #6b7280; font-size: 14px;">
                Please follow up with this investment inquiry promptly.
              </p>
            </div>
          </div>
        </div>
      `
    };
  }
};

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, to, data } = req.body;

    if (!type || !to || !data) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const emailTemplate = generateEmailTemplate(type, data);
    
    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@newlifemedical.com',
      to: to,
      subject: emailTemplate.subject,
      html: emailTemplate.html
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
};