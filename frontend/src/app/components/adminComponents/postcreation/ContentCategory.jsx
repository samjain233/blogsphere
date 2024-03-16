import React from "react";

const categories = [
  "Technology",
  "LifeStyle",
  "Travel",
  "Food",
  "Finance",
  "Health",
  "Education",
  "Parenting",
  "Fashion",
  "Sports",
  "Business",
];

const ContentCategory = ({ setCategory, category }) => {
  return (
    <>
      <div className="w-full flex flex-wrap mt-4">
        {categories.map((element) => {
          return (
            <div
              key={element}
              className={`px-4 py-2 ${
                category === element ? "bg-gray-500 text-white" : "bg-gray-300 "
              } rounded-sm m-2 cursor-pointer hover:bg-gray-400`}
              onClick={()=>{setCategory(element)}}
            >
              <p>{element}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContentCategory;
