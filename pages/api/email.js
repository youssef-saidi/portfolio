// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import _ from 'lodash';

export default async function handler(req, res) {
  let nodemailer = require('nodemailer');
  console.log(req.body)
  const { fullName, email, message } = req.body;
  if (_.isUndefined(fullName) || _.isUndefined(email) || _.isUndefined(message)) res.status(400).json({ success: false });



  var transporter = await nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    service: 'gmail',
    auth: {
      user: "youssefsaidi869@gmail.com",
      pass: "vxdftscexhwbvcta"

    }
  });
  var mailOptions = {
    from: "youssefsaidi869@gmail.com",
    to: 'youssefsaidi869@gmail.com',
    subject: 'Portfolio Email',
    text: `Name:${fullName} \n Email:${email}  \n Message:${message}`,
    // html: `<strong>Name:</strong>${Name} <br/> <strong>Email:</strong>${Email} <br/> <strong>Phone:</strong>${Phone} <br/> <strong>Message:</strong>${Message} <br/>`, 
  };
  transporter.sendMail(mailOptions, function (error, info) {
    console.log(error)
    if (error) {
      res.status(400).json({ success: false });
    } else {
      res.status(200).json({ success: true });
    }
  });



}
