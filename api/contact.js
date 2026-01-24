const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
// Note: Replace these with your actual email credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like Outlook, Yahoo, etc.
  auth: {
    user: process.env.EMAIL_USER || 'utsavseeds@gmail.com', // Your email
    pass: process.env.EMAIL_PASS || 'pczp xdoa vqxq hdzh' // Your app password (not regular password)
  }
});

// Contact form endpoint
app.post('/contact', async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    // Validation
    if (!name || !email || !mobile || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Mobile validation (basic)
    const mobileRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    if (!mobileRegex.test(mobile)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid mobile number format'
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || email,
      to: process.env.ADMIN_EMAIL || 'utsavseeds@gmail.com', // Admin email
      subject: `New Contact Form Submission - UTSAV SEEDS`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50; border-bottom: 3px solid #2196F3; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile:</strong> ${mobile}</p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <p style="color: #757575; font-size: 12px; margin-top: 20px;">
            This email was sent from the UTSAV SEEDS website contact form.
          </p>
        </div>
      `,
      replyTo: email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to user (optional)
    const confirmationMail = {
      from: process.env.EMAIL_USER || 'utsavseeds@gmail.com',
      to: email,
      subject: 'Thank you for contacting UTSAV SEEDS',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50;">Thank you for contacting us!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you soon.</p>
          <p>Your message:</p>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </p>
          <p>Best regards,<br>UTSAV SEEDS Pvt. Ltd.</p>
        </div>
      `
    };

    // Send confirmation (optional - can be commented out if not needed)
    try {
      await transporter.sendMail(confirmationMail);
    } catch (confirmationError) {
      console.log('Confirmation email failed, but main email sent:', confirmationError);
    }

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'API is running' });
});

module.exports = app;












