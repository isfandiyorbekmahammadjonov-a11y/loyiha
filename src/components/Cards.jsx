import React from "react";
import { informationsBlogify } from "../data/Cards";
function Cards() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-center text-[#0F1729] text-[36px] leading-10 mt-32">
        Why Choose Blogify?
      </h2>

      <p className="text-center text-[18px] text-[#6B7280] leading-7 mt-4">
        Built with modern technologies and best practices to provide the best
        blogging <br />
        experience.
      </p>

      <div className="block md:flex justify-center gap-8 py-16">
        {informationsBlogify.map((item) => (
          <div
            key={item.id}
            className="max-w-md p-8 mb-5 mx-auto rounded-[24px] shadow-sm font-sans h-[238px]"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-[#EEF2FF] rounded-[14px] mb-4">
              <img src={item.icon} alt="Icon" />
            </div>

            <h3 className="text-[#0F172A] text-xl font-bold tracking-tight mb-3">
              {item.title}
            </h3>

            <p className="text-[#64748B] text-[16px] leading-relaxed font-normal">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
