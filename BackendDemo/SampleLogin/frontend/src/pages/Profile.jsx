import React, { useEffect, useState } from "react";
import axios from "../config/api";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userdata, setUserdata] = useState();

  const navigate = useNavigate();

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
              <div className="border w-[15rem] h-[15rem] rounded-full overflow-hidden">
                <img
                  src={userdata.profilePhoto}
                  alt="ProfilePic"
                  className="object-cover"
                />
              </div>
              <span>Name: {userdata.name}</span>
              <span>Email: {userdata.email}</span>
              <span>Phone: {userdata.phone}</span>
            </div>
          )}
          <div className="text-center">
            <button
              className="rounded bg-green-500 text-white p-3 mt-8"
              onClick={() => navigate("/update-profile")}
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
