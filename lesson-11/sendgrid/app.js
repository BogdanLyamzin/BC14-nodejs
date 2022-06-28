const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const mail = {
    to: "bogdan@gmail.com",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Новый заказ с сайта",
    html: "<p>С сайта сделан новый заказ</p>"
}

sgMail.send(mail)
    .then(()=> console.log("Mail send success"))
    .catch(error => console.log(error.message));