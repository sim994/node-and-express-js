const nodemailer = require("nodemailer");

const sendmail = async (req, res) => {
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "leopoldo.hills@ethereal.email",
      pass: "HX6mnTuU8XrS9an3dn",
    },
  });

  const info = await transporter.sendMail({
    from: '"hiren" <leopoldo.hills@ethereal.email>',
    to: "hirenpipaliya418@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body
  });

  
  console.log("Message sent:", info.messageId);
  res.json(info)
};

module.exports = sendmail;
