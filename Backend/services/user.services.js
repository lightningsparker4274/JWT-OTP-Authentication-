const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const auth = require("../middlewares/auth.js");

const otpGenerator = require("otp-generator");
const crypto = require("crypto");
const { use } = require("../routes/users.routes.js");
const key = "verysecretkey"; // Key for cryptograpy. Keep it secret
var msg91 = require("msg91")("1", "1", "1");

async function login({ username, password }, callback) {
  const user = await User.findOne({ username });

  if (user != null) {
    if (bcrypt.compareSync(password, user.password)) {
      const token = auth.generateAccessToken(username);
      // call toJSON method applied during model instantiation
      return callback(null, { ...user.toJSON(), token });
    } else {
      return callback({
        message: "Invalid Username/Password!",
      });
    }
  } else {
    return callback({
      message: "Invalid Username/Password!",
    });
  }
}

async function register(params, callback) {
  if (params.username === undefined) {
    console.log(params.username);
    return callback(
      {
        message: "Username Required",
      },
      ""
    );
  }
  console.log(params.username)
  const user = new User(params);
  user
    .save()
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function createNewOTP(params, callback) {
  // Generate a 4 digit numeric OTP
  const otp = otpGenerator.generate(4, {
    alphabets: false,
    upperCase: false,
    specialChars: false,
  });
  const ttl = 5 * 60 * 1000; //5 Minutes in miliseconds
  const expires = Date.now() + ttl; //timestamp to 5 minutes in the future
  const data = `${params.phone}.${otp}.${expires}`; // phone.otp.expiry_timestamp
  const hash = crypto.createHmac("sha256", key).update(data).digest("hex"); // creating SHA256 hash of the data
  const fullHash = `${hash}.${expires}`; // Hash.expires, format to send to the user
  // you have to implement the function to send SMS yourself. For demo purpose. let's assume it's called sendSMS
  //sendSMS(phone, `Your OTP is ${otp}. it will expire in 5 minutes`);

  console.log(`Your OTP is ${otp}. it will expire in 5 minutes`);
 console.log("hash: ", fullHash)
  var otpMessage = `Dear Customer, ${otp} is the One Time Password ( OTP ) for your login.`;

  msg91.send(`+91${params.phone}`, otpMessage, function (err, response) {
    console.log(response);
  });

  return callback(null, fullHash, otp);
}

async function verifyOTP(params, callback) {
  try {
    console.log("Received params:", params);

    if (!params.hash || !params.hash.includes(".")) {
      return callback("Invalid hash format.");
    }

    let [hashValue, expires] = params.hash.split(".");
    let now = Date.now();

    if (now > parseInt(expires)) {
      return callback("OTP Expired");
    }

    let data = `${params.phone}.${params.otp}.${expires}`;
    let newCalculatedHash = crypto
      .createHmac("sha256", key)
      .update(data)
      .digest("hex");

    if (newCalculatedHash === hashValue) {
      return callback(null, "Success");
    } else {
      console.log(newCalculatedHash)
      return callback("Invalid OTP");
    }
  } catch (error) {
    console.error("Error during OTP verification:", error);
    return callback("An error occurred during verification.");
  }
}


module.exports = {
  login,
  register,
  createNewOTP,
  verifyOTP,
};
