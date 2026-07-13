import React, { useContext } from "react";
import { AdminCreatPostsContext } from "../../context/AdminCreatPostsContext";

function FormLeft() {
  let { title, content } = useContext(AdminCreatPostsContext);
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-5">
        <div>
          <label
            htmlFor="title"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
          >
            Post Title
          </label>
          <input
            ref={title}
            type="text"
            id="title"
            placeholder="Enter post title..."
            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
          >
            Content
          </label>
          <textarea
            ref={content}
            id="content"
            rows={12}
            placeholder="Write your post content here..."
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
          />
        </div>
      </div>
    </div>
  );
}

export default FormLeft;
