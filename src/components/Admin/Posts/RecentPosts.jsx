import React from "react";
import RecentPostsRow from "./RecentPostsRow";
const apiUrl = import.meta.env.VITE_API_URL;
import { useEffect } from "react";
import { useState } from "react";
function RecentPosts() {
  let [articles, setArticles] = useState([]);
  useEffect(() => {
    async function Table() {
      let response = await fetch(`${apiUrl}/api/v1/articles/`);
      if (!response.ok) {
        throw new Error("Xato");
      }
      let data = await response.json();
      setArticles(data.data.results);
    }
    Table();
  }, []);
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">Recent Posts</h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage and monitor your latest content
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-3 text-left text-sm font-medium text-gray-500">
                Title
              </th>
              <th className="pb-3 text-left text-sm font-medium text-gray-500">
                Category
              </th>
              <th className="pb-3 text-left text-sm font-medium text-gray-500">
                Date
              </th>
              <th className="pb-3 text-left text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="pb-3 text-right text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {articles.map((post) => (
              <RecentPostsRow key={post.id} post={post} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentPosts;
