import React from "react";
import { Link } from "react-router-dom";
function MobilNav() {
  return (
    <div className="mt-25 md:hidden block">
      <div className="block text-sm mx-10 my-5">
        <Link to="/" className="text-gray-700 hover:text-indigo-600 block mb-5">
          Home
        </Link>
        <Link
          to="/posts"
          className="block text-gray-700 hover:text-indigo-600 mb-5"
        >
          Posts
        </Link>
        <Link
          to="/login"
          className="
              w-full h-[36px]
              flex items-center justify-center
              bg-indigo-600 text-white
              text-[14px] rounded-[14px]
            "
        >
          Login
        </Link>
      </div>
      <div className="items-center gap-6 text-sm hidden md:flex">
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
  );
}

export default MobilNav;
