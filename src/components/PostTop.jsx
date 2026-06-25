import React from "react";

function PostTop() {
  return (
    <section className="bg-[#F5F4FF] py-24">
      <h1 className="text-center font-extrabold text-6xl leading-16">
        Explore Our Posts
      </h1>
      <p className="text-[#6B7280] leading-7 text-5 text-center mt-4">
        Discover amazing content from talented writers across various topics
      </p>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search posts..."
          className="mt-8 w-full bg-white max-w-[576px] px-4 py-2 border border-gray-200 rounded-[10px] text-sm focus:outline-none"
        />
      </div>
    </section>
  );
}

export default PostTop;
