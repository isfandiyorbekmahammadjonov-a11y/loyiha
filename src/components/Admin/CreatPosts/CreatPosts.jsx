import React, { useContext } from "react";
import FormLeft from "./FormLeft";
import FormRight from "./FormRight";
import { AdminCreatPostsContext } from "../../context/AdminCreatPostsContext";
function CreatPosts() {
  let { Post } = useContext(AdminCreatPostsContext);
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
          <FormLeft />
          <FormRight />
        </form>
      </div>
    </div>
  );
}

export default CreatPosts;
