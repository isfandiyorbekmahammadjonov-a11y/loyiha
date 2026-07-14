import React from "react";
const apiUrl = import.meta.env.VITE_API_URL;
import { useEffect } from "react";
import { useState } from "react";
import RecentPostTable from "./RecentPostTable";
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
  async function handleDelet(id) {
    const token = localStorage.getItem("access");
    try {
      let response = await fetch(`${apiUrl}/api/v1/articles/${id}/`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setArticles(articles.filter((item) => item.id !== id));
      } else {
        throw new Error("Xato");
      }
    } catch (error) {
      console.log("Xato");
    }
    9;
  }
  return (
    <>
      <RecentPostTable articles={articles} handleDelet={handleDelet} />
    </>
  );
}

export default RecentPosts;
