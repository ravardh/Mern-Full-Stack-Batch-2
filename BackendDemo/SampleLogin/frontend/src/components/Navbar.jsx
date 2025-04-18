import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  

  return (
    <>
      <div className="w-full h-15 bg-amber-300 flex justify-between px-10 items-center">
        <Link to={"/"}>
          <span className="text-black text-3xl">Sample Login Website</span>
        </Link>

        <div className="flex gap-3">
          <Link to={"/login"}>
            <button
              type="button"
              className="bg-amber-600 border-amber-700 border-0 rounded-xl text-2xl px-4 py-2 text-white"
            >
              Login/Register
            </button>
          </Link>
          <Link to={"/logout"}>
            <button
              type="button"
              className="bg-amber-600 border-amber-700 border-0 rounded-xl text-2xl px-4 py-2 text-white"
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
