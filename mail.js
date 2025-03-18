// The Nodemailer module makes it easy to send emails from your computer.

const nodemailer = require('nodemailer');
require('dotenv').config();


let transporter = nodemailer.createTransport({

    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {

        user: process.env.EMAIL,  // Use environment variable
        pass: process.env.APP_PASSWORD,  // Use App Password stored in .env
    }
});



let mailoptions = {

    from: process.env.EMAIL ,
    to: 'xyz@gmail.com',
    subject: 'Regarding application of intern',
    html: '<h1> Hello </h1>'
}


// sending mail

transporter.sendMail(mailoptions, (err,info) => {

    if(err) console.log('error: ', err.message);
    console.log('mail sent ' + info.response);
});