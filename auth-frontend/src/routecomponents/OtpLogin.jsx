import  { useState } from "react";
import AuthService from "../services/AuthService";
import NavigationBar from "../components/registerpagecontent/NavigationBar";
import { useNavigate } from "react-router-dom";

const OtpLogin = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const handleOtpLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.otpLogin(phone);
      alert("OTP Sent");
      navigate("/verifyOtp");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to send OTP");
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex justify-center items-center h-screen">
        <div className="shadow-lg border border-gray-100 rounded-lg p-10 w-[350px]">
          <h2 className="text-xl">OTP Login</h2>
          <form
            onSubmit={handleOtpLogin}
            className="flex flex-col space-y-5 mt-5"
          >
            <input
              type="number"
              placeholder="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button className="w-[100px] float-right" type="submit">
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpLogin;
