import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user);

  return user.token ? (
    <Outlet />
  ) : (
    <Navigate
      to={{
        pathname: "/signin",
        state: { from: location },
      }}
    />
  );
}