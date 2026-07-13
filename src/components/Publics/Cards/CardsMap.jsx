import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
const apiUrl = import.meta.env.VITE_API_URL;
function CardsMap({ limit }) {
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
    <div className="flex flex-wrap justify-center gap-8 my-8">
      {(limit ? articles.slice(0, limit) : articles).map((item) => {
        return <Card item={item} key={item.id} />;
      })}
    </div>
  );
}

export default CardsMap;
