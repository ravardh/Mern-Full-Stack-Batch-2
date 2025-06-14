import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const { authUser, isLoggedIn, setAuthUser, setIsLoggedIn } = useAuth();

  
  

  return (
    <>
      <div id="navbar">
        <Link to={"/"}>Home</Link>

        <Link to={"/products"}>Product Page</Link>

        {isLoggedIn ? (
          <Link to={"/profile"}>{authUser.name}</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
