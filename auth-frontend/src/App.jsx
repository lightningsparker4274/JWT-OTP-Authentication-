import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./routecomponents/Register";
import Login from "./routecomponents/Login";
import OtpLogin from "./routecomponents/OtpLogin";
import VerifyOtp from "./routecomponents/VerifyOtp";
import MainPage from "./components/mainpagecontent/MainPage";

function App() {
  return (
    <Router>
      <div className="font-base">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otpLogin" element={<OtpLogin />} />
          <Route path="/verifyOtp" element={<VerifyOtp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
