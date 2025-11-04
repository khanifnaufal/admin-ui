import React from "react";
import { post } from "./services";
import PostCard from "./PostCard.jsx";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 ">
        <h1 className="text-3xl font-bold text-center mb-6 text-special-red">
          Post Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-8xl mx-auto">
          {post.map((item, index) => (
            <PostCard key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;
