const express = require('express')
const router = express.Router();
const authController = require("./controllers/auth.controller");
const jobController = require("./controllers/job.controller");
const passport = require("passport");
const { googleCallback } = require('./controllers/google.controller');

router.post("/signin", authController.signIn);
router.post("/signup", authController.signUp);
router.get("/google", passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:3000' }), googleCallback);
router.get("/logout", () => { });

router.use(authController.middleware);
router.get("/test", (_, res) => res.sendStatus(200));
router.post("/jobs", jobController.createJob);
router.get("/jobs/:id", jobController.readJob);
router.get("/jobs", jobController.readJobs);
router.put("/jobs/:id", jobController.updateJob);
router.delete("/jobs/:id", jobController.deleteJob);

module.exports = router;