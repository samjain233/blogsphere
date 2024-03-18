"use client";
import React, { useEffect, useState } from "react";
import GetTrendingPost from "../../../../api/getTrendingBlogApi";
// import getNewlyUploadedPost from "../../../../api/NewlyUploadedPostApi";
import NewlyUploadedPost from "../../../../api/NewlyUploadedPostApi";
import InfoCards from "../infoCards/InfoCards";
import FeaturedPostApi from "../../../../api/FeaturedPostApi";

const FrontPageSections = ({ title }) => {
  const [blogs, setBlogs] = useState([]);
  const getTrendingPost = async () => {
    const data = await GetTrendingPost();
    if (data.success) {
      setBlogs(data.data);
    }
  };

  const getNewlyUploadedPost = async () => {
    const data = await NewlyUploadedPost();
    if (data.success) {
      setBlogs(data.data);
    }
  };

  const getFeaturedPost = async () => {
    const data = await FeaturedPostApi();
    if (data.success) {
      setBlogs(data.data);
    }
  };

  useEffect(() => {
    if (title === "Trending Post") {
      getTrendingPost();
    } else if (title === "Newly Uploaded") {
      getNewlyUploadedPost();
    } else if (title === "Featured Post") {
      getFeaturedPost();
    }
  }, []);
  return (
    <>
      <div className="sm:px-[8%] lg:px-[10%] 2xl:px-[12%] px-4 mt-12">
        <h2 className="py-3 font-bold text-xl sm:text-2xl">{title}</h2>
        <InfoCards blogs={blogs} />
      </div>
    </>
  );
};

export default FrontPageSections;
