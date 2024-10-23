/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../custom-hooks/useAuth";

const ProtectedRoute = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
