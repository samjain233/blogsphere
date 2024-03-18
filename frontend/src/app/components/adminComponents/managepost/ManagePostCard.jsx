import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { TbCircleLetterA } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { FaCopy } from "react-icons/fa6";

import GetBlogApi from "../../../../../api/GetBlogApi";
import UpdateActiveBlogApi from "../../../../../api/UpdateActiveBlogApi";
import DeleteBlogApi from "../../../../../api/DeleteBlogApi";
import toast from "react-hot-toast";

const dummyImageUrl =
  "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ManagePostCard = ({
  postData,
  setMarkdown,
  setTitle,
  setSlug,
  setKeywords,
  setCategory,
  setMainImageUrl,
  setTab,
  setBlogId,
  reload,
}) => {
  const updateBlog = async () => {
    const token = localStorage.getItem("token");
    const data = await GetBlogApi({ blogId: postData._id, token });
    setMarkdown(data.data.content);
    setTitle(data.data.title);
    setSlug(data.data.slug);
    setKeywords(data.data?.keywords);
    setCategory(data.data?.category);
    setMainImageUrl(data.data?.imageUrl);
    setBlogId(data.data._id);
    setTab("Create Post");
  };

  const updateStatus = async () => {
    const token = localStorage.getItem("token");
    const data = await UpdateActiveBlogApi({
      token,
      isActive: !postData.active,
      postId: postData._id,
    });
    if (data.success) {
      toast.success(data.message);
      reload();
    } else {
      toast.error(data.message);
    }
  };

  const deleteBlog = async () => {
    const token = localStorage.getItem("token");
    const data = await DeleteBlogApi({
      token,
      blogId: postData._id,
    });
    if (data.success) {
      toast.success(data.message);
      reload();
    } else {
      toast.error(data.message);
    }
  };

  const viewPost = () => {
    const url = process.env.NEXT_PUBLIC_FRONTEND + "blog/" + postData.slug;
    window.open(url, "_blank");
  };

  // const sharePost = () => {
  //   console.log("sharing");
  //   const url = process.env.NEXT_PUBLIC_FRONTEND + "blog/" + postData.slug;
  //   const blogUrl = encodeURIComponent(url);
  //   window.open(
  //     `https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl}`
  //   );
  // };

  const copyToClipBoard = ()=>{
    const url = process.env.NEXT_PUBLIC_FRONTEND + "blog/" + postData.slug;
    navigator.clipboard.writeText(url);
    toast.success("link copied to clipboard");
  }
  return (
    <>
      <div>
        <div>
          <LazyLoadImage
            src={postData.imageUrl ? postData.imageUrl : dummyImageUrl}
            alt="Blogsphere"
            className="w-full h-[180px] object-cover rounded-t-lg"
          />
        </div>
        <div className="bg-gray-400 p-2 text-white border-b-2 border-t-2 border-white">
          <p>{postData.title}</p>
        </div>
        <div className="bg-gray-400 p-2 text-white border-b-2 border-t-2 border-white flex justify-between">
          <p>views {postData.views / 2}</p>
          <p>upvotes {postData.upvotes.length}</p>
        </div>
        <div className="grid grid-cols-5 justify-items-center rounded-b-lg bg-gray-400 p-2">
          <div
            className="text-lg  text-white p-2 rounded-full hover:bg-gray-500 cursor-pointer"
            onClick={viewPost}
          >
            <FaEye />
          </div>
          <div
            className="text-lg  text-white p-2 rounded-full hover:bg-gray-500 cursor-pointer"
            onClick={updateBlog}
          >
            <FaEdit />
          </div>
          <div
            className="text-lg  text-white p-2 rounded-full hover:bg-gray-500 cursor-pointer"
            onClick={copyToClipBoard}
          >
            <FaCopy />
          </div>
          <div
            className={`text-lg ${
              postData.active ? "bg-gray-600" : ""
            } text-white p-2 rounded-full hover:bg-gray-500 cursor-pointer`}
            onClick={updateStatus}
          >
            <TbCircleLetterA />
          </div>
          <div
            className="text-lg  text-white p-2 rounded-full hover:bg-gray-500 cursor-pointer"
            onClick={deleteBlog}
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagePostCard;
