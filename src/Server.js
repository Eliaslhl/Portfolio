const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure your SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'eliaslahlouh@gmail.com',
    pass: 'IDK'
  }
});

// Handle POST request to send email
app.post('/send-email', (req, res) => {
  const { username, phoneNumber, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'eliaslahlouh@gmail.com',
    subject: subject,
    text: `Nom: ${username}\nTéléphone: ${phoneNumber}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
