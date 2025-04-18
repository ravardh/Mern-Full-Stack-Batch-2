import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../config/api";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post("/api/auth/login", formData);
      console.log(response.data);
      alert(response.data.message);
      navigate("/profile");
    } catch (e) {
      console.log("Uanble to fetch Data from Server");
      alert(e.response.data.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded mb-4"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded mb-6"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
            onClick={handelSubmit}
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
