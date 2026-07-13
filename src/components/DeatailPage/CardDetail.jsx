import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function CardDetail() {
  const { id } = useParams();
  const location = useLocation();
  const item = location.state?.item;

  return (
    <div className="min-h-screen bg-white flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl">
        <Link
          to={"/"}
          className="mb-8 flex items-center gap-2 text-sm text-gray-600 hover:text-black"
        >
          ← Back to Posts
        </Link>
        <span className="inline-block rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
          {item.category.name}
        </span>
        <h1 className="mt-4 text-5xl font-bold leading-tight text-gray-900">
          {item.title}
        </h1>
        <img
          src={item.image}
          alt="Technology"
          className="mt-8 h-[360px] w-full rounded-xl object-cover"
        />
        <div className="mt-8 space-y-5 text-[15px] leading-7 text-gray-700">
          {item.content}
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
