import React from "react";
import Hero from "../../components/Hero";
import Cards from "../../components/Cards/Cards";
import PostsInfo from "../../components/Posts/PostsInfo";
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
