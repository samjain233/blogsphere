"use client";
import React, { useEffect, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css"; // Import SimpleMDE CSS
import PostTitle from "./PostTitle";
import PostSlug from "./PostSlug";
import PostKeyword from "./PostKeyword";
import ContentCategory from "./ContentCategory";
import { UploadImageToFirebase } from "../../../../../lib/uploadImage";
import { FaEye } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";

const PostContent = ({ markdown, setMarkdown, setDisplayPost }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [category, setCategory] = useState("");
  useEffect(() => {
    let slugifiedTitle = title.toLowerCase().replace(/\s+/g, '-');
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
        const imageMarkdown = `<img src="${imageUrl}" alt="" ></img>`;
        setMarkdown(markdown + imageMarkdown);
      }
    } catch (err) {
      console.log("some error occured");
    }
  };

  const handleUpload = async () => {};
  return (
    <>
      <PostTitle title={title} setTitle={setTitle} />
      <PostSlug slug={slug} />
      <SimpleMDE value={markdown} onChange={(value) => setMarkdown(value)} />
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
            handleImageUpload();
          }}
        >
          <FaCloudUploadAlt />
        </div>
      </div>
    </>
  );
};

export default PostContent;
