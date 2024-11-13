const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json()); // For parsing application/json

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Email content
  const msg = {
    to: "edwinadriangomez12@gmail.com", // Replace with your email
    from: "edwinadriangomez12@gmail.com", // Replace with a valid email in your domain
    subject: `New Contact Form Submission from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    html: `<strong>You have received a new message from ${name} (${email}):</strong><p>${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email.");
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
