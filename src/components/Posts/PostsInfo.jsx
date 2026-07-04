import React from "react";
import { BiCalendarAlt } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import CardsMap from "../Cards/CardsMap";
function PostsInfo() {
  return (
    <div className="container mx-auto px-6">
      <div className="flex justify-between mt-[256px] mb-12">
        <div>
          <h2 className="text-[36px] leading-10">Latest Posts</h2>
          <p className="text-[18px] text-[#6B7280] leading-7">
            Check out our most recent articles
          </p>
        </div>

        <button className="flex justify-center items-center border-2 border-[#E5E7EB] rounded-2xl w-[130px] h-[44px]">
          View All <FaArrowRightLong />
        </button>
      </div>
      <CardsMap />
    </div>
  );
}

export default PostsInfo;
