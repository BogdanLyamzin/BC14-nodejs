const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465, // 25, 465, 2255
    secure: true,
    auth: {
        user: "bogdan.lyamzin.d@meta.ua",
        pass: META_PASSWORD
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const mail = {
    to: "bogdan@gmail.com",
    from: "bogdan.lyamzin.d@meta.ua",
    subject: "Новый заказ с сайта",
    html: "Новый заказ с сайта"
}

transporter.sendMail(mail)
    .then(()=> console.log("Mail send success"))
    .catch(error => console.log(error.message))