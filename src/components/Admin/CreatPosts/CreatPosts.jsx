import React from "react";
import { FiUploadCloud, FiChevronDown } from "react-icons/fi";
function CreatPosts({ title, content, category, img, Post, clear }) {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Create New Post
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Fill in the details to create a new blog post
          </p>
        </div>

        <form className="grid grid-cols-1 lg:grid-cols-3 gap-6" onSubmit={Post}>
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
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Post Settings
              </h2>
              <div>
                <label
                  htmlFor="category"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                >
                  Category
                </label>
                <div className="relative">
                  <select
                    ref={category}
                    id="category"
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 appearance-none focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors cursor-pointer"
                  >
                    <option value="1">Technology</option>
                    <option value="2">Productivity</option>
                    <option value="3">Design</option>
                    <option value="4">Business</option>
                    <option value="5">Lifestyle</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                    <FiChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Featured Image
              </h2>
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-indigo-500 transition-colors cursor-pointer group">
                <input
                  ref={img}
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept="image/png, image/jpeg, image/webp"
                />
                <label htmlFor="file-upload" className="cursor-pointer block">
                  <div className="flex justify-center mb-3">
                    <FiUploadCloud className="w-9 h-9 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    <span className="text-slate-600 font-semibold block">
                      Click to upload or drag and drop
                    </span>
                    PNG, JPG or WEBP
                  </p>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={clear}
                className="px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
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

export default CreatPosts;
