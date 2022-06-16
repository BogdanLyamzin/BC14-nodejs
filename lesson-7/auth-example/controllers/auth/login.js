const bcrypt = require("bcryptjs");

const {User} = require("../../models/user");

const {createError} = require("../../helpers");

const login = async(req, res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        throw createError(401, "Wrong email");
    }
    if(!bcrypt.compare(password, user.password)){
        throw createError(401, "Wrong password");
    }
    const token = "hfgsadag.fgdfhdgmsdf.sgadsadsd";
    res.json({
        token,
        user: {
            email: user.email
        }
    })
}

module.exports = login;