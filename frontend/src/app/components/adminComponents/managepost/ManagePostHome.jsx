import React from "react";
import ManagePostCard from "./ManagePostCard";

const ManagePostHome = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-2 px-8 mt-8">
        <ManagePostCard />
        <ManagePostCard />
        <ManagePostCard />
      </div>
    </>
  );
};

export default ManagePostHome;
