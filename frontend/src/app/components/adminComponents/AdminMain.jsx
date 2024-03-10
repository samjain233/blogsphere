import React from "react";
import SidePanel from "./SidePanel";
import AdminDashboard from "./AdminDashboard";

const AdminMain = () => {
  return (
    <>
      <div className="w-full grid grid-cols-5">
        <SidePanel />
        <div className="col-span-4">
          <AdminDashboard />
        </div>
      </div>
    </>
  );
};

export default AdminMain;
