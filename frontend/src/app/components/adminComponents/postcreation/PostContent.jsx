"use client";
import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import PostTitle from "./PostTitle";
import PostSlug from "./PostSlug";
import PostKeyword from "./PostKeyword";
import ContentCategory from "./ContentCategory";
import { UploadImageToFirebase } from "../../../../../lib/uploadImage";
import { FaEye } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import CreateBlogApi from "../../../../../api/CreateBlogApi";
import UpdateBlogApi from "../../../../../api/UpdateBlogApi";

const PostContent = ({
  markdown,
  setMarkdown,
  setDisplayPost,
  title,
  setTitle,
  slug,
  setSlug,
  keywords,
  setKeywords,
  category,
  setCategory,
  mainImageUrl,
  setMainImageUrl,
  blogId,
  setTab,
}) => {
  useEffect(() => {
    let slugifiedTitle = title.toLowerCase().replace(/\s+/g, "-");
    // Add a hyphen and random numbers if the title is not empty
    if (slugifiedTitle) {
      slugifiedTitle += `-${Math.floor(Math.random() * 1000)}`;
    }
    setSlug(slugifiedTitle);
  }, [title]);

  const handleImageUpload = async (file) => {
    try {
      const imageUrl = await UploadImageToFirebase(file);
      if (imageUrl) {
        if (mainImageUrl === null) {
          setMainImageUrl(imageUrl);
        }
        const imageMarkdown = `<CustomImage src="${imageUrl}" alt="" />`;
        setMarkdown(markdown + imageMarkdown);
      }
    } catch (err) {
      console.log("some error occured");
    }
  };

  const handleUpload = async () => {
    if (title === "" || slug === "" || markdown === "") {
      toast.error("please enter some content to post");
      return;
    }
    const token = localStorage.getItem("token");
    if (token) {
      if (!blogId) {
        //creation of post
        const data = await CreateBlogApi({
          title,
          slug,
          keywords,
          category,
          content: markdown,
          token,
          imageUrl: mainImageUrl,
        });
        if (data.success) {
          toast.success(data.message);
          setTitle("");
          setSlug("");
          setKeywords([]);
          setCategory("");
          setMarkdown("");
          setMainImageUrl(null);
        } else {
          toast.error(data.message);
        }
      } else {
        //updation of post
        const data = await UpdateBlogApi({
          title,
          slug,
          keywords,
          category,
          content: markdown,
          token,
          imageUrl: mainImageUrl,
          blogId,
        });
        if (data.success) {
          toast.success(data.message);
          setTitle("");
          setSlug("");
          setKeywords([]);
          setCategory("");
          setMarkdown("");
          setMainImageUrl(null);
          setTab("Manage Post");
        } else {
          toast.error(data.message);
        }
      }
    }
  };
  return (
    <>
      <PostTitle title={title} setTitle={setTitle} />
      <PostSlug slug={slug} />
      <MDEditor value={markdown} onChange={(value) => setMarkdown(value)} />
      <ContentCategory category={category} setCategory={setCategory} />
      <PostKeyword keywords={keywords} setKeywords={setKeywords} />
      <div className="fixed bottom-4 right-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            handleImageUpload(e.target.files[0]);
          }}
          style={{ display: "none" }}
          id="imageInput"
        />
        <div
          className="text-2xl p-4 my-2 bg-gray-500 text-white rounded-full cursor-pointer hover:bg-gray-600 transition-colors duration-200"
          onClick={() => document.getElementById("imageInput").click()}
        >
          <FaRegImage />
        </div>
        <div
          className="text-2xl p-4 my-2 bg-gray-500 text-white rounded-full cursor-pointer hover:bg-gray-600 transition-colors duration-200"
          onClick={() => {
            setDisplayPost(true);
          }}
        >
          <FaEye />
        </div>
        <div
          className="text-2xl p-4 my-2 bg-gray-500 text-white rounded-full cursor-pointer hover:bg-gray-600 transition-colors duration-200"
          onClick={() => {
            handleUpload();
          }}
        >
          <FaCloudUploadAlt />
        </div>
      </div>
    </>
  );
};

export default PostContent;
