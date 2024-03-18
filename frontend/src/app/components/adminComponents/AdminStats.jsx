import React, { useEffect, useState } from "react";
import DashboardAnalyticsApi from "../../../../api/DashboardAnalyticsApi";

const AdminStats = () => {
  const [blogs, setBlogs] = useState(0);
  const [views, SetViews] = useState(0);
  const [upvotes, setUpvotes] = useState(0);
  const [followers, setFollowers] = useState(0);
  const getData = async () => {
    const token = localStorage.getItem("token");
    const data = await DashboardAnalyticsApi({ token });
    if (data.success) {
      setBlogs(data.data.noOfBlogs);
      SetViews(data.data.totalViews);
      setUpvotes(data.data.totalUpvotes);
      setFollowers(data.data.noOfFollowers);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="flex justify-between m-4">
        <div className="py-6 px-12 bg-cyan-400 shadow-md m-4 grow">
          <h4 className="text-2xl font-semibold">Blogs</h4>
          <p className="text-right text-4xl font-bold mt-2">{blogs}</p>
        </div>
        <div className="py-6 px-12 bg-teal-400 shadow-md m-4 grow">
          <h4 className="text-2xl font-semibold">Views</h4>
          <p className="text-right text-4xl font-bold mt-2">{views}</p>
        </div>
        <div className="py-6 px-12 bg-rose-400 shadow-md m-4 grow">
          <h4 className="text-2xl font-semibold">Upvotes</h4>
          <p className="text-right text-4xl font-bold mt-2">{upvotes}</p>
        </div>
        <div className="py-6 px-12 bg-amber-400 shadow-md m-4 grow">
          <h4 className="text-2xl font-semibold">Followers</h4>
          <p className="text-right text-4xl font-bold mt-2">{followers}</p>
        </div>
      </div>
    </>
  );
};

export default AdminStats;
