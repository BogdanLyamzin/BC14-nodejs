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

const sendMail = async(data) => {
    try {
        const mail = {...data, from: "bogdan.lyamzin.d@meta.ua"};
        await transporter.sendMail(mail);
        return true;
    } catch (error) {
        throw error;
    }
}

module.exports = sendMail;