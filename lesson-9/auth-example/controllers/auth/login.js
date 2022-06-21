const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {User} = require("../../models/user");

const {createError} = require("../../helpers");

const {SECRET_KEY} = process.env;

const login = async(req, res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        throw createError(401, "Wrong email");
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if(!comparePassword){
        throw createError(401, "Wrong password");
    }
    const payload = {
        id: user._id
    }
    const token = jwt.sign(payload, SECRET_KEY);
    await User.findByIdAndUpdate(user._id, {token});
    res.json({
        token,
        user: {
            email: user.email,
            name: user.name
        }
    })
}

module.exports = login;