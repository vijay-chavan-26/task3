import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AdminDashboard from "../Components/AdminDashboard";
import AdminLoginForm from "../Components/AdminLoginForm";

const AdminPage = () => {
  const isLogin = JSON.parse(useSelector((state) => state.setLogin));
  useEffect(() => {
    localStorage.setItem("loginStatus", isLogin);
  }, [isLogin]);
  return <>{isLogin !== true ? <AdminLoginForm /> : <AdminDashboard />}</>;
};

export default AdminPage;
