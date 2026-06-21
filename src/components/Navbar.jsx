import React from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="w-full border-b border-[#E5E7EB] bg-white flex justify-center">
      <div className="container mx-auto px-6 h-[72px] w-[1216px] flex items-center justify-between">
        <div className="flex items-center gap-2 text-indigo-600 font-semibold text-lg">
          <FiEdit />
          <span>Blogify</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">
            Home
          </Link>
          <Link to="/posts" className="text-gray-700 hover:text-indigo-600">
            Posts
          </Link>
          <Link
            to="/login"
            className="
              w-[64px] h-[36px]
              flex items-center justify-center
              bg-indigo-600 text-white
              text-[14px] rounded-[14px]
            "
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
