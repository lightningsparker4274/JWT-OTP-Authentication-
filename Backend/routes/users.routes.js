const usersController = require("../controllers/user.controller");

const express = require("express");
const router = express.Router();

router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.post("/otpLogin", usersController.otpLogin);
router.post("/verifyOTP", usersController.verifyOTP);

module.exports = router;