import React from "react";

const AdminStats = () => {
  return (
    <>
      <div className="flex justify-between m-4">
        <div className="py-6 px-12 bg-cyan-400 shadow-md m-4 grow">
          <h4 className="text-2xl font-semibold">Blogs</h4>
          <p className="text-right text-4xl font-bold mt-2">57</p>
        </div>
        <div className="py-6 px-12 bg-teal-400 shadow-md m-4 grow">
          <h4 className="text-2xl font-semibold">Views</h4>
          <p className="text-right text-4xl font-bold mt-2">57452</p>
        </div>
        <div className="py-6 px-12 bg-rose-400 shadow-md m-4 grow">
          <h4 className="text-2xl font-semibold">Upvotes</h4>
          <p className="text-right text-4xl font-bold mt-2">345</p>
        </div>
        <div className="py-6 px-12 bg-amber-400 shadow-md m-4 grow">
          <h4 className="text-2xl font-semibold">Followers</h4>
          <p className="text-right text-4xl font-bold mt-2">1067</p>
        </div>
      </div>
    </>
  );
};

export default AdminStats;
