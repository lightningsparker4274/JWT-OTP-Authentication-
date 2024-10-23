import { useState } from "react";
import AuthService from "../services/AuthService";
import NavigationBar from "../components/registerpagecontent/NavigationBar";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.register(email, username, password);
      alert("Registration Successful");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex items-center justify-center h-screen">
        <div className=" p-14 border border-gray-200 shadow-lg rounded-xl">
          <form onSubmit={handleRegister} className="flex flex-col space-y-6">
            <h2 className="text-xl">Register</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
