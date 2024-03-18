"use client";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import GetCountUpvotesApi from "../../../../api/GetCountUpvotesApi";
import UpvotePostApi from "../../../../api/UpvoteBlogApi";
import toast from "react-hot-toast";

const Upvotes = ({ slug }) => {
  const [upvotes, setUpvotes] = useState(0);
  const getUpvotes = async () => {
    const data = await GetCountUpvotesApi({ slug });
    console.log(data);
    if (data.success) {
      setUpvotes(data.data.countNoOfUpvotes);
    }
  };
  useEffect(() => {
    getUpvotes();
  }, []);

  const handleUpvotesClick = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const data = await UpvotePostApi({ slug, token });
      if (data.success) {
        toast.success(data.message);
        getUpvotes();
      }
    } else {
      toast.error("get login to continue");
    }
  };
  return (
    <div className="flex m-2 p-2">
      <div className="flex flex-row justify-center items-center p-2 bg-gray-200 rounded-full">
        <div className="px-8 py-2 ">{upvotes}</div>
        <div
          className="p-2 text-2xl cursor-pointer text-gray-700 hover:text-gray-800"
          onClick={handleUpvotesClick}
        >
          <FaArrowAltCircleUp />
        </div>
        <div className="text-2xl p-2 cursor-pointer text-gray-700 hover:text-gray-800">
          <FaArrowAltCircleDown />
        </div>
      </div>
    </div>
  );
};

export default Upvotes;
