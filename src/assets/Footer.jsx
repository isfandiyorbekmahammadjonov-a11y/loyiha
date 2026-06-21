import React from "react";
import { FiEdit } from "react-icons/fi";
function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-8 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          <div className="md:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#6366F1] font-bold text-xl">
              <FiEdit />
              <span>Blogify</span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm">
              Create, read, and inspire. Discover amazing stories written by
              talented creators from around the world.
            </p>
          </div>
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-[#0F172A] font-bold text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-[#94A3B8] text-sm">
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Posts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Login
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-[#0F172A] font-bold text-lg">Connect</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  className="w-5 h-5 opacity-60"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="/icons/github.svg"
                  alt="GitHub"
                  className="w-5 h-5 opacity-60"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-5 h-5 opacity-60"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 text-center text-[#94A3B8] text-xs">
          © 2025 Blogify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
