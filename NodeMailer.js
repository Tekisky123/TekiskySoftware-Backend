// nodemailer.js

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tekiskymart920@gmail.com",
    pass: "SULEMANKHAN5555",
  },
});

const sendFormDataEmail = (formData) => {
  const mailOptions = {
    from: "tekiskymart920@gmail.com",
    to:  formData.email,
    replyTo: formData.email,
    subject: "New Form Submission",
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

export default sendFormDataEmail;
