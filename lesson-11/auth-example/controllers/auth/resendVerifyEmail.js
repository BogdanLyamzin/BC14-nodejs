const {User} = require("../../models/user");

const {createError, sendMail} = require("../../helpers");

const {SITE_URL} = process.env;

const resendVerifyEmail = async(req, res)=>{
    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user){
        throw createError(404);
    }
    if(user.verify){
        throw createError(400, "Verification has already been passed");
    }
    const {verificationToken} = user;
    const mail = {
        to: email,
        subject: "Подтверждение регистрации на сайте",
        html: `<a target="_blank" href="${SITE_URL}/auth/verify/${verificationToken}">Нажмите для подтверждения регистрации</a>`
    }
    await sendMail(mail);
    res.json({
        message: "Verification email sent"
    })
}

module.exports = resendVerifyEmail;