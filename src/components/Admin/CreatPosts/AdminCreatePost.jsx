import React from "react";
const apiUrl = import.meta.env.VITE_API_URL;
import CreatPosts from "./CreatPosts";
import { useRef } from "react";
function AdminCreatePost() {
  let title = useRef();
  let content = useRef();
  let category = useRef();
  let img = useRef();
  function clear() {
    title.current.value = "";
    content.current.value = "";
    img.current.value = "";
  }
  async function Post(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title.current.value);
    formData.append("content", content.current.value);
    formData.append("category", category.current.value);
    formData.append("image", img.current.files[0]);
    try {
      const token = localStorage.getItem("access");
      const response = await fetch(`${apiUrl}/api/v1/articles/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        console.log(data);
      }
      title.current.value = "";
      content.current.value = "";
      img.current.value = "";
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <CreatPosts
      title={title}
      content={content}
      category={category}
      img={img}
      Post={Post}
      clear={clear}
    />
  );
}

export default AdminCreatePost;
