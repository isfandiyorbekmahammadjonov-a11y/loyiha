import React from "react";
import { Link } from "react-router-dom";
function AdminLeft() {
  return (
    <div className="flex flex-col border-r-2 h-screen p-5 gap-2">
      <Link to={"."}>Dashboard</Link>
      <Link to={"posts"}>Posts</Link>
      <Link to={"createPost"}>Create Post</Link>
    </div>
  );
}

export default AdminLeft;
