import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Link to={"/"}>MyApp</Link>
          </div>
          <div className="space-x-4">
            <Link to={"/about"} className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link to={"/contact"} className="text-gray-300 hover:text-white">
              Contact
            </Link>

            <Link to={"/chat"} className="text-gray-300 hover:text-white">
              Chat
            </Link>
            <Link to={"/profile"} className="text-gray-300 hover:text-white">
              Profile
            </Link>
            <Link to={"/login"} className="text-gray-300 hover:text-white">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
