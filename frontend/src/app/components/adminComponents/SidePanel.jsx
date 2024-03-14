import { useRouter } from "next/navigation";
import React from "react";
const list = ["Dashboard", "Create Post", "Manage Post", "Home", "Logout"];

const SidePanel = ({tab , setTab}) => {

const router=useRouter()

  return (
    <>
      <div className="bg-gray-200 p-2 h-screen shadow-md sticky top-0">
        {list.map((element, index) => {
          return (
            <div
              key={index}
              className={`${tab===element?"bg-gray-500 text-white":"bg-gray-300"} p-4 mt-2 cursor-pointer hover:bg-gray-400 transition-all duration-200`}
              onClick={()=>{if(element==="Home"){router.push("/")};setTab(element)}}
            >
              <p>{element}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SidePanel;
