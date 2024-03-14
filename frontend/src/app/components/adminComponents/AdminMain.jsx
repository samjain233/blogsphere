import React, { useState } from "react";
import SidePanel from "./SidePanel";
import AdminDashboard from "./AdminDashboard";
import CreatePost from "./postcreation/CreatePost";
import ManagePostHome from "./managepost/ManagePostHome";

const AdminMain = () => {
  const [tab, setTab] = useState("Manage Post");
  return (
    <>
      <div className="w-full grid grid-cols-5">
        <SidePanel tab={tab} setTab={setTab} />
        <div className="col-span-4">
          {tab === "Dashboard" && <AdminDashboard />}
          {tab === "Create Post" && <CreatePost />}
          {tab === "Manage Post" && <ManagePostHome />}
        </div>
      </div>
    </>
  );
};

export default AdminMain;
