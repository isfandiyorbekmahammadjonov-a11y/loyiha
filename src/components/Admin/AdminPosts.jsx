import React, { useContext } from "react";
import { AdminUpdatePostsContext } from "../context/AdminUpdatePost";
function AdminPosts() {
  let { title, content, category, img, clear, Post } = useContext(
    AdminUpdatePostsContext,
  );
  return (
    <div className="min-h-screen bg-[#f3f4f9] p-6 md:p-12 flex justify-center items-start font-sans">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-10">
          Update Post
        </h1>
        <form onSubmit={Post} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                POST TITLE
              </label>
              <input
                ref={title}
                type="text"
                placeholder="Enter post title..."
                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                CONTENT
              </label>
              <textarea
                ref={content}
                placeholder="Write your post content here..."
                rows={10}
                className="w-full flex-1 px-4 py-3 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none min-h-[250px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Post Settings
              </h3>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  CATEGORY
                </label>
                <div className="relative">
                  <select
                    ref={category}
                    className="w-full appearance-none px-4 py-3 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white pr-10"
                  >
                    <option value="1">Technology</option>
                    <option value="2">Productivity</option>
                    <option value="3">Design</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Featured Image
              </h3>

              <label className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-400 hover:bg-slate-50 transition-all min-h-[160px]">
                <input
                  ref={img}
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
                <div className="text-center flex flex-col items-center">
                  <svg
                    className="w-10 h-10 text-indigo-500 mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                  <p className="text-sm font-semibold text-slate-700">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    PNG, JPG or WEBP
                  </p>
                </div>
              </label>
            </div>
            <div className="flex gap-4 justify-end mt-2">
              <button
                type="button"
                className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#4F46E5] text-white font-semibold rounded-lg hover:bg-[#4338CA] shadow-md shadow-indigo-100 transition-all"
              >
                Publish Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminPosts;
