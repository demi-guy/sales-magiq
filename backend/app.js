const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const router = require("./router");
const session = require("express-session");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleStrategy } = require("./controllers/google.controller");

mongoose.connect(`mongodb+srv://${encodeURI(process.env.DB_NAME)}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/salesmagiq?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((error,) => {
        console.error(error);
    });

app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cookieParser());

app.use("/", router);

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.SERVER_IP}/google/callback`
},
    googleStrategy
));

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running!");
});