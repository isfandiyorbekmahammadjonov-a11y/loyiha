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
  return (
    <>
      <RecentPostTable articles={articles} />
    </>
  );
}

export default RecentPosts;
