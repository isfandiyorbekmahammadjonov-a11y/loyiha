import React from "react";
import Hero from "../../components/Publics/Hero";
import Cards from "../../components/Admin/Cards/Cards";
import PostsInfo from "../../components/Publics/Posts/PostsInfo";
function Home() {
  return (
    <div>
      <Hero />
      <Cards />
      <PostsInfo />
    </div>
  );
}

export default Home;
