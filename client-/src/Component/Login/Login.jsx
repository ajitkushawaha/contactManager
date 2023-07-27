import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();

    if (!userName || !userPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(userName)) {
      setError("Invalid email address.");
      return;
    }

    if (!isValidPassword(userPassword)) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError(""); // Clear any previous error messages

    const data = { email: userName, password: userPassword };
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          prompt("Login Successfully");
        } else if (response.status === 401) {
          console.log(response);
          setError("Invalid Credentials: please check username and password");
        } else {
          throw new Error("Login failed");
        }
      })
      .catch((error) => {
        console.log("Error logging in: ", error);
      });

  };

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="bg-gray-600/20 h-screen flex items-center justify-center">
      <form
        action=""
        className="flex flex-col items-center justify-center gap-8 w-96 border border-cyan-500 p-4 bg-gradient-to-r from-gray-700 via-gray-700/50 to-blue-800/30 rounded"
      >
        <h2 className="font-bold text-white capitalize border-b border-b-cyan-500 w-full text-center text-xl p-2">
          Login
        </h2>
        <div className="flex flex-col gap-8 w-full">
          <input
            type="text"
            name="UserName or Email"
            className="bg-gray-700 p-1 outline-none border border-cyan-500"
            placeholder="Email User name"
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              className="bg-gray-700 p-1 outline-none border border-cyan-500 w-full"
              placeholder="Password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <span
              className="absolute right-2 top-2 cursor-pointer"
              onClick={handlePasswordVisibility}
            >
              {showPassword ? "👁️" : "🙈"}
            </span>
          </div>
        </div>
        {error && <span className="text-red-500">{error}</span>}
        <span>
          if you are a new user?{" "}
          <Link to={"/register"}>
            <b className="text-blue-500">Sign up</b>
          </Link>
        </span>
        <button
          type="submit"
          className="bg-blue-500 px-5 py-1 hover:bg-blue-600"
          onClick={handleUserSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
