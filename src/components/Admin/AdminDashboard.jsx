import React, { useState } from "react";
import DashboardStats from "./Dashboard/DashboardStats";
import RecentPosts from "./Posts/RecentPosts";

function AdminDashboard() {
  return (
    <div className="p-8 flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Welcome back! Here's an overview of your blog.
        </p>
      </div>
      <DashboardStats />;
      <RecentPosts />
    </div>
  );
}

export default AdminDashboard;
