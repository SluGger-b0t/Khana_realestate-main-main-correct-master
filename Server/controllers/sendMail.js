/* import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "adityashri09@gmail.com",
    pass: "wcol tvye shkx bfcr",
  },
});
const mailOptions = {
  from: "adityashri09@gmail.com",
  to: "sharadkalavadia@gmail.com",
  subject: "Nodemailer Test",
  html: "Test <button>sending</button> Gmail using Node JS test kar ra hu ignore kr ",
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

const sendMail = async (req, res) => {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export default sendMail
 */
// controllers/sendMail.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const sendMail = async (req, res) => {
   
        
   
    console.log(req.body)
  const { name, email, msg, location, number, sub } =await req?.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "khannarealestate13@gmail.com",
    subject: sub,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${msg}</p><p>Location: ${location}</p><p>Number: ${number}</p>`,
    
  };
 

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
};

export default sendMail;
