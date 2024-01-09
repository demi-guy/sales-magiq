const User = require("../models/user.model");
const { generateAccessToken } = require("./jwt.controller");
module.exports = {
    googleStrategy: async (accessToken, refrechToken, profile, done) => {
        if (!profile._json.email) throw "User does not have email";
        let user = await User.findOne({ email: profile._json.email });
        if (user) {
            done(null, user);
        } else {
            const newUser = {
                password: "",
                email: profile._json.email,
            }
            user = await User.create(newUser);
            done(null, user);
        }
    },
    googleCallback: async (req, res) => {
        const token = generateAccessToken(req.user);
        res.cookie('jwtToken', token);
        res.redirect(process.env.CLIENT_IP);
    }
}