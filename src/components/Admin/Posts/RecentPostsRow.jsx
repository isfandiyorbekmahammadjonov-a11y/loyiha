import React from "react";
const statusStyles = {
  Published: "bg-green-50 text-green-600",
  Draft: "bg-gray-100 text-gray-500",
};
function RecentPostsRow({ post }) {
  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="py-4 text-sm font-medium text-gray-900">{post.title}</td>

      <td className="py-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600">
          {post.category.name}
        </span>
      </td>

      <td className="py-4 text-sm text-gray-500">{post.created_at}</td>

      <td className="py-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium ">
          {post.status ? "publish" : "draft"}
        </span>
      </td>

      <td className="py-4 text-right">
        <div className="flex items-center justify-end gap-4">
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            Edit
          </button>
          <button className="text-sm font-medium text-red-500 hover:text-red-600">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
export default RecentPostsRow;
