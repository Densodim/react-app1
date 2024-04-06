import React, { useContext } from "react";
import { Navigate, children, useLocation } from "react-router-dom";

export const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(() =>
    localStorage.getItem("user") ? localStorage.getItem("user") : null
  ); // set user

  const login = (value, callback) => {
    localStorage.setItem("user", value.email); // set user
    // console.log('login', value); // set user
    setUser(value);
    callback && callback(); // callback
  };
  const logout = (callback) => {
    localStorage.removeItem("user"); // remove user
    setUser(null);
    callback && callback(); // callback
  };
  // console.log('children', children);
  const value = {
    user,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext); // return {user: null, login: () => {}, logout: () => {}}
}

export function RequireAuth({ children }) {

  const location = useLocation(); // get location
//   console.log("location", location);

  const auth = useAuth(); // get auth context

  if (auth.user === null) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />; // redirect
  }

//   console.log("auth", auth);

  return children;
}
