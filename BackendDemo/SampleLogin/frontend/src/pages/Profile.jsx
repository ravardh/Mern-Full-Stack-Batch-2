import React, { useEffect, useState } from "react";
import axios from "../config/api";

const Profile = () => {
  const [userdata, setUserdata] = useState();

  const getUserData = async () => {
    try {
      const response = await axios.get("/api/auth/user");
      console.log(response.data);
      setUserdata(response.data);
    } catch (e) {
      console.log("Uanble to fetch Data from Server");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Profile</h2>

          {!userdata ? (
            <span>User Not Found</span>
          ) : (
            <div className="flex flex-col items-center gap-5">
              <span>Name: {userdata.name}</span>
              <span>Email: {userdata.email}</span>
              <span>Phone: {userdata.phone}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
