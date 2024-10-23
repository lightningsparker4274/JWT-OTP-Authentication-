const bcrypt = require("bcryptjs");
const userServices = require("../services/user.services");
const User = require("../models/user.model");

/**
 * 1. To secure the password, we are using the bcryptjs, It stores the hashed password in the database.
 * 2. In the SignIn API, we are checking whether the assigned and retrieved passwords are the same or not using the bcrypt.compare() method.
 * 3. In the SignIn API, we set the JWT token expiration time. Token will be expired within the defined duration.
 */
exports.register = (req, res, next) => {
  console.log("register")
  const { password } = req.body;

  console.log('Request Body:', req.body); 
  const salt = bcrypt.genSaltSync(10);

  req.body.password = bcrypt.hashSync(password, salt);

  userServices.register(req.body, (error, results) => {
  
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

exports.login = (req, res, next) => {
  const { username, password } = req.body;
  console.log("login")
  userServices.login({ username, password }, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};



exports.otpLogin = (req, res, next) => {
  createOtp = userServices.createNewOTP(req.body, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

exports.verifyOTP = (req, res, next) => {
  const { phone, otp, hash } = req.body;

  // Check if all fields are provided
  if (!phone || !otp || !hash) {
    return res.status(400).send({ message: 'Phone, OTP, and hash are required.' });
  }

  userServices.verifyOTP(req.body, (error, results) => {
    if (error) {
      return res.status(400).send({ message: error });
    }
    return res.status(200).send({
      message: 'OTP verification successful.',
      data: results,
    });
  });
};

