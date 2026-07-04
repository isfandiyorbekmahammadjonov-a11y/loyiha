import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import AdminLeft from "../components/Admin/AdminLeft";
function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminLeft />
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
