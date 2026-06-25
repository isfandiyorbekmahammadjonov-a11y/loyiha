import React from "react";
import CardsMap from "./CardsMap";
function PostsBottom() {
  return (
    <section className="py-16">
      <div className="flex justify-center">
        <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-xl">
          <button className="px-8 py-2 text-sm font-medium bg-white rounded-lg shadow-sm text-gray-900">
            All
          </button>

          <button className="px-5 py-2 text-sm text-gray-500 rounded-lg hover:bg-white/60">
            Technology
          </button>

          <button className="px-5 py-2 text-sm text-gray-500 rounded-lg hover:bg-white/60">
            Productivity
          </button>

          <button className="px-5 py-2 text-sm text-gray-500 rounded-lg hover:bg-white/60">
            Design
          </button>
        </div>
      </div>
      <div className="container">
        <CardsMap />
        <CardsMap />
      </div>
    </section>
  );
}

export default PostsBottom;
