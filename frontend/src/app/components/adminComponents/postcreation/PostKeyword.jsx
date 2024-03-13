import React, { useEffect, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

const PostKeyword = ({ keywords, setKeywords }) => {
  const [keyword, setKeyword] = useState("");
  const handleAddKeywordClick = () => {
    setKeywords((prevKeywords) => {
      return [...prevKeywords, keyword];
    });
    setKeyword("");
  };

  const handleRemoveKeywordClick = (indexToRemove) => {
    setKeywords((prevKeywords) => {
      return prevKeywords.filter((element, index) => index !== indexToRemove);
    });
  };

  return (
    <>
      <div className="flex my-4">
        <p className="p-2 font-bold">Keyword</p>
        <input
          type="text"
          className="p-2 border-b border-gray-400 grow"
          placeholder="Enter Keyword"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <div
          className="flex justify-center items-center text-2xl cursor-pointer p-2"
          onClick={handleAddKeywordClick}
        >
          <IoAddCircle />
        </div>
      </div>
      <div className="flex flex-wrap my-4">
        {keywords.map((element, index) => {
          return (
            <div
              key={index}
              className="py-2 px-4 bg-gray-300 rounded mx-2 flex justify-center items-center mt-2"
            >
              <p>{element}</p>
              <div
                className="flex justify-center items-center text-xl ml-2 cursor-pointer"
                onClick={() => handleRemoveKeywordClick(index)}
              >
                <IoIosCloseCircle />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PostKeyword;
