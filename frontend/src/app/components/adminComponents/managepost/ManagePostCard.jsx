import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const imgUrl =
  "https://images.unsplash.com/photo-1600065755981-a7f7f560ab04?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { TbCircleLetterA } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const ManagePostCard = () => {
  return (
    <>
      <div>
        <div>
          <LazyLoadImage
            src={imgUrl}
            alt="shimla"
            className="w-full h-[180px] object-cover rounded-t-lg"
          />
        </div>
        <div className="bg-gray-400 p-2 text-white border-b-2 border-t-2 border-white">
          <p>this is my post</p>
        </div>
        <div className="grid grid-cols-5 justify-items-center rounded-b-lg bg-gray-400 p-2">
          <div className="text-lg  text-white p-2 rounded-full hover:bg-gray-500 cursor-pointer">
            <FaEye />
          </div>
          <div className="text-lg  text-white p-2 rounded-full hover:bg-gray-500 cursor-pointer">
            <FaEdit />
          </div>
          <div className="text-lg  text-white p-2 rounded-full hover:bg-gray-500 cursor-pointer">
            <SiGoogleanalytics />
          </div>
          <div className="text-lg  text-white p-2 rounded-full hover:bg-gray-500 cursor-pointer">
            <TbCircleLetterA />
          </div>
          <div className="text-lg  text-white p-2 rounded-full hover:bg-gray-500 cursor-pointer">
            <MdDelete />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagePostCard;
