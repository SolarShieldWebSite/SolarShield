export default function contact(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.GMAIL_BURNER_EMAIL,
      pass: process.env.GMAIL_BURNER_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.GMAIL_BURNER_EMAIL,
    to: "amorosothomas.dev@gmail.com",
    subject: `Message de ${req.body.name} avec pour objet ${req.body.object}`,
    text: req.body.message + " | envoyé par " + req.body.email,
    html: `<div>${req.body.message}</div><p>Envoyé par : ${req.body.email}</p>`,
  };

  return transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
      res.status(200);
      res.send();
    }
  });
}
