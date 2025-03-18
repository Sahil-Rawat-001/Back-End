// The Nodemailer module makes it easy to send emails from your computer.

const nodemailer = require('nodemailer');

// to keep sensitive data we need dotenv module
require('dotenv').config();


// nodemailer.createTransport(): Creates a transport for sending emails.

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

    from: process.env.EMAIL , // sender mail
    to: 'rawatsujal670@gmail.com',      // reciever mail
    subject: 'application for holiday', // mail subject
    html: 'I kindly beg to say that please grant me leave of 2 days' // mail body
}


// sending mail
// sendMail(mailoptions, callback): Sends the email.
transporter.sendMail(mailoptions, (err,info) => {

    if(err) console.log('error: ', err.message);
    console.log('mail sent ' + info.response);
});