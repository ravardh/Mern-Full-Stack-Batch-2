import React, { useEffect, useState } from "react";
import axios from "../config/api";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const performLogout = async () => {
    try {
      const response = await axios.post("/api/auth/logout");
      console.log(response.data);
      setMessage(response.data.message);
    } catch (e) {
      console.log("Uanble to fetch Data from Server");
      navigate("/login");
      alert("Please Login First")
    }
  };

  useEffect(() => {
    performLogout();
  }, []);

  return (
    <>
      {!message ? (
        navigate("/login")
      ) : (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-6">
          <h1 className="text-5xl font-bold text-blue-700 mb-4">
            Thanks for Choosing Us
          </h1>
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default Logout;
