// https://edigleyssonsilva.medium.com/how-to-send-emails-securely-using-gmail-and-nodejs-eef757525324

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});
// transporter.verify().then(console.log).catch(console.error);



const sendWelcomeEmail = (email, name) => {
    sendMail(email,`Welcome ${name} to the task manager app!`, "We are happy to help you manage your tasks ;)")
}

const sendCancelationEmail = (email, name) => {
    sendMail(email,`Nooo, ${name} why are you leaving us?`, "We are sorry about you leaving us... please tell us why  :(")
}

const sendMail = (to, subject, body) => {
    transporter.sendMail({
        from: '"TaskManager" <taskmanagerapp1234@gmail.com>', // sender address
        to, // list of receivers
        subject, // Subject line
        text: body, // plain text body
    }).then(info => {
        console.log({ info });
    }).catch(console.error);
}

module.exports = {sendWelcomeEmail, sendCancelationEmail}