import React,{useState} from "react";
import SidePanel from "./SidePanel";
import AdminDashboard from "./AdminDashboard";
import CreatePost from "./postcreation/CreatePost";

const AdminMain = () => {
  const [tab , setTab] = useState("Dashboard");
  return (
    <>
      <div className="w-full grid grid-cols-5">
        <SidePanel tab={tab} setTab={setTab} />
        <div className="col-span-4">
          {tab==="Dashboard" && <AdminDashboard />}
          {tab==="Create Post" && <CreatePost />}
        </div>
      </div>
    </>
  );
};

export default AdminMain;
