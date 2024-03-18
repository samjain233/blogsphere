"use client";
import React, { useEffect, useState } from "react";
import { SlUserFollow } from "react-icons/sl";
import { HiOutlineViewGrid } from "react-icons/hi";
import GetUserProfileApi from "../../../../api/GetUserProfileDataApi";
import toast from "react-hot-toast";
import CheckIfIFollowApi from "../../../../api/CheckIfIFollowApi";
import UnfollowUserApi from "../../../../api/UnfollowUserApi";
import FollowUserApi from "../../../../api/FollowUserApi";

const ProfileMain = ({ userId }) => {
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState(0);
  const [blogs, setBlogs] = useState(0);
  const [isFolow, setIsFollow] = useState(false);

  const getUserProfile = async () => {
    const data = await GetUserProfileApi({ userId });
    if (data.success) {
      setUsername(data.data.username);
      setFollowers(data.data.followersCount);
      setBlogs(data.data.blogCount);
    }
  };

  const handleFollowClick = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      if (isFolow) {
        const data = await UnfollowUserApi({ userId, token });
        if (data.success) {
          checkIfIFollow();
          getUserProfile();
        }
      } else {
        const data = await FollowUserApi({ userId, token });
        if (data.success) {
          checkIfIFollow();
          getUserProfile();
        }
      }
    } else {
      toast.error("please login first");
    }
  };

  const checkIfIFollow = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const data = await CheckIfIFollowApi({ token, userId });
      setIsFollow(data.data.following);
    }
  };
  useEffect(() => {
    getUserProfile();
    const token = localStorage.getItem("token");
    if (token) {
      checkIfIFollow();
    }
  }, []);
  return (
    <>
      <div className="w-full h-full p-12">
        <div className="w-full flex justify-center items-center">
          <div className="w-[40%] bg-gray-200 p-4 bg- flex flex-col justify-center items-center rounded-2xl">
            <img
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
              className="w-[300px] h-[300px] object-cover rounded-full"
            />
            <div className="my-2">
              <p className="text-xl font-bold">{username}</p>
            </div>
            <div className="flex justify-center items-center my-2">
              <div className="border-2 border-[#184E77] p-4 rounded-lg mx-2 text-black font-bold">
                {followers} followers
              </div>
              <div className="border-2 border-[#184E77] p-4 rounded-lg mx-2  text-black font-bold">
                {blogs} blogs
              </div>
            </div>
            <div className="flex justify-center items-center my-2">
              <div
                className="bg-[#184E77] p-4 rounded-lg mx-2 text-white font-bold flex justify-center items-center cursor-pointer"
                onClick={handleFollowClick}
              >
                <SlUserFollow />
                <p className="ml-2">
                  {isFolow ? "unfollow" : "follow"} {username}
                </p>
              </div>
              <div className="bg-[#184E77] p-4 rounded-lg mx-2 text-white font-bold flex justify-center items-center cursor-pointer">
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
