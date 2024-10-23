import { useState } from "react";
import AuthService from "../services/AuthService";
import NavigationBar from "../components/registerpagecontent/NavigationBar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(username, password);
      alert("Login Successful");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex items-center justify-center h-screen">
        <div className=" p-14 border border-gray-200 shadow-lg rounded-xl">
          <h2 className="text-xl">Login</h2>
          <form onSubmit={handleLogin} className="flex flex-col space-y-6 mt-5">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
