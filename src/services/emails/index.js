require("dotenv").config();
const nodemailer = require("nodemailer");


const courier = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "ranie7455@gmail.com",
      clientId: process.env.G_CLIENT_ID,
      clientSecret: process.env.G_CLIENT_SECRET,
      refreshToken: process.env.G_REFRESH_TOKEN,
    },
  });


  const sendVerificationEmail = async ({
      recepient,
      subject,
      name,
  }) => {
    try {
      
      const mail = {
        from: "Student Report <ranie7455@gmail.com> ",
        to: recepient,
        subject,
        html: `<h2>Hi ${name}, Thanks for register. please click the link to verify you email</h2>
        <a href="http://localhost:${process.env.API_PORT}/users/verify?token=${recepient}" > Click Here </a>
      `,
      };
      const result = await courier.sendMail(mail);

    } catch (error) {
      console.log({ error });
    }
  };


  module.exports = {sendVerificationEmail}