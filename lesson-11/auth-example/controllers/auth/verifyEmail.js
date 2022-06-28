const {User} = require("../../models/user");

const {createError} = require("../../helpers");

const verifyEmail = async(req, res)=> {
    const {verificationToken} = req.params;
    const user = await User.findOne({verificationToken});
    if(!user){
        throw createError(404);
    }
    await User.findByIdAndUpdate(user._id, {verify: true, verificationToken: ""});
    res.json({
        message: 'Verification successful'
    })
}

module.exports = verifyEmail;