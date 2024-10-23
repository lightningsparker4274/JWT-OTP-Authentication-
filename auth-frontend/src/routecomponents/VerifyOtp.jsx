import { useState } from "react";
import AuthService from "../services/AuthService";
import NavigationBar from "../components/registerpagecontent/NavigationBar";

const VerifyOtp = () => {
  const [phone, setPhone] = useState("");
  const [hash, setHash] = useState("");
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.verifyOTP(phone, hash, otp);
      alert("OTP Verified");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("OTP Verification Failed");
    }
  };

  return (
    <div>
      <NavigationBar/>
      <div className="flex justify-center items-center h-screen">
        <div className="shadow-lg border border-gray-100 rounded-lg p-10 w-[350px]">
          <h2 className="text-xl">Verify OTP</h2>
          <form onSubmit={handleVerifyOtp} className="space-y-5 mt-5">
            <input
              type="number"
              placeholder="Enter Phone same as previous"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Enter hash sended in console.."
              value={hash}
              onChange={(e) => setHash(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Enter OTP showed in backend CLI"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit">Verify OTP</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
