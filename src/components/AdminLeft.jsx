import React from "react";
import { Link } from "react-router-dom";
import { MdLogout, MdOutlineDashboard, MdPostAdd } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
function AdminLeft() {
  return (
    <div className="w-[250px] h-screen bg-white border-r border-gray-200 flex flex-col justify-between">
      <div>
        <div className="px-6 py-5 border-b border-gray-200">
          <h1 className="text-[24px] font-bold text-[#5B5CEB]">Blogify</h1>
          <p className="text-[13px] text-gray-400">Admin Panel</p>
        </div>



        <div className="px-3 pt-5 space-y-1">
          <Link
            to="."
            className="flex items-center gap-3 h-11 px-4 rounded-lg text-[#111827] hover:bg-gray-50 text-[14px]"
          >
            <MdOutlineDashboard className="text-lg" />
            <span>Dashboard</span>
          </Link>

          <Link
            to="posts"
            className="flex items-center gap-3 h-11 px-4 rounded-lg text-[#111827] hover:bg-gray-50 text-[14px]"
          >
            <FaRegFileAlt className="text-lg" />
            <span>Posts</span>
          </Link>

          <Link
            to="createPost"
            className="flex items-center gap-3 h-11 px-4 rounded-lg text-[#111827] hover:bg-gray-50 text-[14px]"
          >
            <MdPostAdd className="text-lg" />
            <span>Create Post</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-200 px-3 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 h-11 px-4 rounded-lg text-[#111827] hover:bg-gray-50 text-[14px]"
        >
          <MdLogout className="text-lg" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default AdminLeft;
