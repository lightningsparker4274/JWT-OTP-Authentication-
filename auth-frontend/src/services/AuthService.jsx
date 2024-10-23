import axios from "axios";

const API_URL = "http://localhost:3000/users";

const register = (email,username, password) => {
  return axios.post(`${API_URL}/register`, {
    email,
    username,
    password,
  });
};

const login = (username, password) => {
  return axios.post(`${API_URL}/login`, {
    username,
    password,
  });
};

const otpLogin = (phone) => {
  return axios.post(`${API_URL}/otpLogin`, {
    phone
  });
};

const verifyOTP = (phone,hash, otp) => {
  return axios.post(`${API_URL}/verifyOTP`, {
    phone,
    hash,
    otp,
  });
};

export default {
  register,
  login,
  otpLogin,
  verifyOTP,
};
