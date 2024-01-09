const { verifyAccessToken, generateAccessToken, generateRefreshToken, verifyRefreshToken } = require("./jwt.controller");
const User = require("../models/user.model");
const isEmpty = require("is-empty");
const bcrypt = require("bcryptjs");

module.exports = {
    middleware: (req, res, next) => {
        try {
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];

            if (!token) {
                return res.sendStatus(401);
            }

            const result = verifyAccessToken(token);
            if (!result.success) {
                return res.status(403).json({ error: result.error });
            }
            req.user = result.data;
            next();
        } catch (err) {
            res.sendStatus(500);
            console.error(err);
        }
    },
    signIn: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (isEmpty(email) || isEmpty(password)) {
                return res.sendStatus(400);
            }
            const user = await User.findOne({ email });
            if (isEmpty(user)) {
                return res.sendStatus(405);
            }
            bcrypt.compare(password, user.password)
            .then(result => {
                if(result) {
                    const token = generateAccessToken(user);
                    res.cookie('jwtToken', token);
                    res.status(202).json({ token });
                } else {
                    res.sendStatus(405);
                }
            });
        } catch (err) {
            res.sendStatus(500);
            console.error(err);
        }

    },
    signUp: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (isEmpty(email) || isEmpty(password)) {
                return res.sendStatus(400);
            }
            const user = await User.findOne({ email });
            if (!isEmpty(user)) {
                return res.sendStatus(409);
            }
            bcrypt.hash(password, 10)
                .then(hash => User.create({ email, password: hash })
                    .then(() => res.sendStatus(201)));
        } catch (err) {
            res.sendStatus(500);
            console.error(err);
        }
    }
}