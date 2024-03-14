import React from "react";
import AdminStats from "./AdminStats";
import AdminChart from "./AdminChart";

const data = [
  { name: "Jan", views: 20 },
  { name: "Feb", views: 35 },
  { name: "Mar", views: 40 },
  { name: "Apr", views: 45 },
  { name: "May", views: 50 },
];

const AdminDashboard = () => {
  return (
    <>
      <div className="bg-white overflow-y-auto ">
        <AdminStats />
        <div className="mt-12 grid grid-cols-1 xl:grid-cols-2 p-4 justify-items-center">
          <AdminChart data={data} />
          <AdminChart data={data} />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
