import React from "react";
const list = ["Dashboard", "Create Post", "Manage Post","Home","Logout"];

const SidePanel = () => {
  return (
    <>
      <div className="bg-gray-200 p-2 h-screen shadow-md sticky top-0">
        {list.map((element) => {
          return (
            <div className="bg-gray-300 p-4 mt-2 cursor-pointer hover:bg-gray-400 transition-all duration-200">
              <p>{element}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SidePanel;
