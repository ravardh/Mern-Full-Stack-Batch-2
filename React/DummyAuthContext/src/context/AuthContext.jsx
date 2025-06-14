import React, { useState, useEffect, useContext } from "react";

const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};


export const useAuth = () =>{
    return useContext(AuthContext);
}