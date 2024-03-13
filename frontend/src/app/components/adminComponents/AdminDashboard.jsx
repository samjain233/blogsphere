import React from "react";
import AdminStats from "./AdminStats";
import InfoCards from "../infoCards/InfoCards";
const AdminDashboard = () => {
  return (
    <>
      <div className="bg-white overflow-y-auto ">
        <AdminStats />
        <InfoCards />
      </div>
    </>
  );
};

export default AdminDashboard;
