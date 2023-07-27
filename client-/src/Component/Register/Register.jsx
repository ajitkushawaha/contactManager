import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Invalid email address.");
      return;
    }

    if (!isValidPassword(password)) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    let data = { name, email, password };

    fetch("http://localhost:3000/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          prompt("Registration successful");
          navigate("/login");
        } else if (response.status === 400) {
          // User with this email or username already exists
          return response.json();
        } else {
          throw new Error("Registration failed");
        }
      })
      .then((data) => {
        if (data && data.error) {
          setError(data.error);
        }
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Error registering user:");
        setIsSubmitting(false);
      });

      localStorage.setItem("user", JSON.stringify(data))
  };




  return (
    <div className="bg-gray-600/20 h-screen flex items-center justify-center">
      <form
        action="method"
        className=" flex flex-col items-center justify-center gap-8 w-96 border border-cyan-500 p-4
      bg-gradient-to-r from-black via-gray-800/50 to-blue-900/30 rounded"
      >
        <h2 className="font-bold text-white capitalize border-b border-b-cyan-500 w-full text-center text-xl py-2 ">
          Register
        </h2>
        <div className="flex flex-col gap-8 w-full">
          <input
            type="text "
            name="Name"
            className="bg-gray-700 p-1 outline-none  border border-cyan-500"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="Email"
            className="bg-gray-700 p-1 outline-none border border-cyan-500 "
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="Password"
            className="bg-gray-700 p-1 outline-none border border-cyan-500 "
            placeholder="P******d"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <span className="text-red-500">{error}</span>}
        <span>
          if you all ready register?{" "}
          <Link to={"/login"}>
            <b className="text-blue-500">Login</b>
          </Link>
        </span>

        <button
          type="submit"
          className="bg-blue-500 px-5 py-1 hover:bg-blue-600 "
          onClick={handleUserSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
