import React from "react";
import { SlUserFollow } from "react-icons/sl";
import { HiOutlineViewGrid } from "react-icons/hi";
const ProfileMain = () => {
  return (
    <>
      <div className="w-full h-full p-12">
        <div className="w-full flex justify-center items-center">
          <div className="w-[40%] bg-gray-200 p-4 bg- flex flex-col justify-center items-center rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-[300px] h-[300px] object-cover rounded-full"
            />
            <div className="my-2">
              <p className="text-xl font-bold">My Name</p>
            </div>
            <div className="flex justify-center items-center my-2">
              <div className="border-2 border-[#184E77] p-4 rounded-lg mx-2 text-black font-bold">
                342 followers
              </div>
              <div className="border-2 border-[#184E77] p-4 rounded-lg mx-2  text-black font-bold">
                12 blogs
              </div>
            </div>
            <div className="flex justify-center items-center my-2">
              <div className="bg-[#184E77] p-4 rounded-lg mx-2 text-white font-bold flex justify-center items-center">
                <SlUserFollow />
                <p className="ml-2">follow My Name</p>
              </div>
              <div className="bg-[#184E77] p-4 rounded-lg mx-2 text-white font-bold flex justify-center items-center">
                <HiOutlineViewGrid />
                <p className="ml-2">View Blogs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileMain;
