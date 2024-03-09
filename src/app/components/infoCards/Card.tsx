"use client";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const imgUrl =
  "https://images.unsplash.com/photo-1600065755981-a7f7f560ab04?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Card = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full cursor-pointer">
          <LazyLoadImage
            src={imgUrl}
            alt="shimla"
            className="w-full h-[180px] object-cover"
          />
        </div>
        <div className="bg-white">
          <h2 className="text-xl font-bold">heading</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="w-full h-1 bg-[#184E77]"></div>
        </div>
      </div>
    </>
  );
};

export default Card;
