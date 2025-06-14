import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { isLoggedIn, setAuthUser, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setAuthUser({
      name: "vicky",
      email: "abcd@gmail.com",
      phone: "98659865865",
      gender: "M",
    });
    setIsLoggedIn(true);
    navigate("/profile");
  };

  console.log(isLoggedIn);
  return (
    <>
      <button
        onClick={(e) => {
          login(e);
        }}
      >
        Login
      </button>
    </>
  );
};

export default Login;
