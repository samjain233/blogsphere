"use client";
import React, { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import AddCommentApi from "../../../../api/AddCommentBlogApi";
import FetchCommentApi from "../../../../api/FetchCommentBlogApi";
import toast from "react-hot-toast";
const Comments = ({ slug }) => {
  const [comment, setComment] = useState("");
  const [commentsArray, setCommentsArray] = useState([]);

  const handleAddClick = async () => {
    const token = localStorage.getItem("token");
    if (comment !== "" && token) {
      const data = await AddCommentApi({ slug, comment, token });
      if (data.success) {
        setComment("");
        toast.success(data.message);
        fetchCommentsData();
      }
    }
  };

  const fetchCommentsData = () => {
    FetchCommentApi({ slug }).then((data) => {
      if (data.success) {
        setCommentsArray(data.data.comments);
      }
    });
  };

  useEffect(() => {
    fetchCommentsData();
  }, []);
  return (
    <>
      <div className="my-4">
        {commentsArray.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-left w-full border-2 px-8 py-2 rounded-full mb-2"
            >
              <p className="font-bold mr-2">{item.name}</p>
              <p>{item.comment}</p>
            </div>
          );
        })}
      </div>
      <div className="my-4">
        <div className="flex flex-row justify-between items-center">
          <input
            type="text"
            className="w-full border-b-2 px-8 py-2  border-black grow"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div
            className="text-2xl text-[#184E77] p-2 cursor-pointer hover:text-[#263f52] outline-none"
            onClick={handleAddClick}
          >
            <IoIosAddCircle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
