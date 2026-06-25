import React from "react";
import { blogPostsBlogify } from "../data/PostInfo";
import { BiCalendarAlt } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
function CardsMap() {
  return (
    <div className="md:flex block justify-center gap-8 my-8">
      {blogPostsBlogify.map((item) => {
        return (
          <div
            key={item.id}
            className="max-w-[360px] mx-auto bg-white border border-gray-100 rounded-[24px] shadow-sm overflow-hidden font-sans"
          >
            <div className="relative h-[200px] w-full">
              <img
                src={item.image}
                alt="The Future of Web Development"
                className="w-full h-full object-cover"
              />

              <span className="absolute top-4 left-4 bg-[#4F46E5] text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {item.category}
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                <BiCalendarAlt />
                <span>{item.date}</span>
              </div>

              <h3 className="text-[#0F172A] text-xl font-bold leading-snug mb-3">
                {item.title}
              </h3>

              <p className="text-[#64748B] text-sm leading-relaxed mb-5">
                {item.desc}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-[#4F46E5] font-semibold text-sm hover:gap-2.5 transition-all"
              >
                <span>Read more</span>
                <FaArrowRightLong />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardsMap;
