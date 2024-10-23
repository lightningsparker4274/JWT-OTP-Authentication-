import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="flex items-center justify-center h-24 shadow-lg sticky top-0">
      <div className="flex float-right">
        <ul className="flex gap-5 text-xl">
          <li className="li">
            <Link to={"/login"}>Login</Link>
          </li>
          <li className="li">
            <Link to={"/register"}>Register</Link>
          </li>
          <li className="li">
            <Link to={"/otpLogin"}>OTP Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
