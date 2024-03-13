import React from "react";

const PostTitle = ({ title, setTitle }) => {
  return (
    <>
      <div className="flex my-4">
        <p className="p-2 font-bold">Title</p>
        <input
          type="text"
          className="p-2 border-b border-gray-400 grow"
          placeholder="Enter title of blog"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default PostTitle;
