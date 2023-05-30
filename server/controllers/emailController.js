require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = async (firstName, lastName, email, subject, message) => {
  const messageOutput = `
    <h1>You received a message from ${email}</h1>
    <h2>Subject: ${subject} </h2>
    <ul>
        <li>First name: ${firstName}</li>
        <li>Last name: ${lastName}</li>
    </ul>
    <p>${message}</p>
    `;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER, // replace with your user's email in .env
      pass: process.env.SMTP_PASS, // replace with your password in .env
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"GA - Dev Nodemailer" <${process.env.SMTP_USER}>`, // sender address
    to: process.env.SMTP_RECEIVER_EMAIL, // replace with your email in .env
    subject: 'You have a new contact request!',
    text: 'Hello world? Something went wrong, so you got a plain text body', // plain text body fallback
    html: messageOutput,
  });
  console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;
