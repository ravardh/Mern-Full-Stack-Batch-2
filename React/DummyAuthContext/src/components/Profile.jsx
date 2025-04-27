import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { setAuthUser, isLoggedIn, setIsLoggedIn, authUser } = useAuth();

  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    setAuthUser(null);
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <>
      <br />
      <br />
      <br />

      <span>This is Profile Page</span>
      <br />
      <br />
      {isLoggedIn ? (
        <div>
          <span>{authUser.name}</span>
          <br />
          <span>{authUser.email}</span>
          <br />
          <span>{authUser.gender}</span>
          <br />
          <span>{authUser.phone}</span>
          <br />

          <button
            onClick={(e) => {
              logout(e);
            }}
          >
            Log Out
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Profile;
