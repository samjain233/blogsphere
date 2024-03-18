"use client";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const imgUrl =
  "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Card = ({ blog }) => {
  const handlePostClick = () => {
    const url = process.env.NEXT_PUBLIC_FRONTEND + "blog/" + blog.slug;
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="w-full" onClick={handlePostClick}>
        <div className="w-full cursor-pointer">
          <LazyLoadImage
            src={blog.imageUrl ? blog.imageUrl : imgUrl}
            alt="shimla"
            className="w-full h-[180px] object-cover"
          />
        </div>
        <div className="bg-white">
          <h2 className="text-lg mt-1 font-bold sm:text-xl">{blog.title}</h2>
          <div className="flex">
            <p>By :</p>
            <p> {blog.author.username}</p>
          </div>

          <div className="w-full mt-2 h-1 bg-[#184E77]"></div>
        </div>
      </div>
    </>
  );
};

export default Card;
