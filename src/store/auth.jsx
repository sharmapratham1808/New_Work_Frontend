import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const authorizationToken = `Bearer ${token}`;

  // Compute isLoggedIn based on current token value
  const isLoggedIn = !!token;

  const API = import.meta.env.VITE_APP_URI_API;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  // LOGOUT FUNCTIONALITY
  const LogoutUser = () => {
    setToken("");
    setUser(""); // Also clear the user data when logging out
    return localStorage.removeItem("token");
  };

  // JWT AUTEHNTICATION -- to get currently login data

  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
        setIsLoading(false);
        // console.log("User data", data.userData);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error fetching user data", error);
    }
  };

  //    fetch data from database in services page

  const getServices = async () => {
    try {
      const response = await fetch(`${API}/api/data/service`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data.message);
        setServices(data.message);
      }
    } catch (error) {
      console.log(`services frontend error: ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    // Only attempt to authenticate if there's a token
    if (token) {
      userAuthentication();
    }
  }, [token]); // Add token as dependency to re-run when token changes

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationToken, isLoading, API }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return AuthContextValue;
};
