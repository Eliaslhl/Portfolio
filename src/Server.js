const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure your SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Handle POST request to send email
app.post("/send-email", (req, res) => {
  const { username, phoneNumber, email, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Portfolio Contact: ${subject}`,
    text: `Nom: ${username}\nTéléphone: ${phoneNumber}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send(error.toString());
    }
    console.log("Email sent successfully:", info.response);
    res.status(200).send("Email sent successfully");
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
