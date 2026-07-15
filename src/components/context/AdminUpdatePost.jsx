import { createContext } from "react";
import { useRef } from "react";
import { useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
export const AdminUpdatePostsContext = createContext();
export const UpdatePostsContext = ({ children }) => {
  const [activePostId, setActivePostId] = useState(null);
  function setPostEdit(post) {
    setActivePostId(post.id);
    setTimeout(() => {
      if (title.current) title.current.value = post.title || "";
      if (content.current) content.current.value = post.content || "";
      if (category.current)
        category.current.value = post.category?.id || post.category || "1";
    }, 50);
  }
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
      const response = await fetch(
        `${apiUrl}/api/v1/articles/${activePostId}/`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );

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
    <AdminUpdatePostsContext
      value={{
        title,
        content,
        category,
        img,
        clear,
        Post,
        setPostEdit,
        activePostId,
      }}
    >
      {children}
    </AdminUpdatePostsContext>
  );
};
