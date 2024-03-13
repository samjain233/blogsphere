import React from "react";

const PostSlug = ({ slug }) => {
  return (
    <>
      <div className="flex my-4">
        <p className="p-2 font-bold">Slug</p>
        <input
          type="text"
          className="p-2 border-b border-gray-400 grow"
          disabled={true}
          value={slug}
        />
      </div>
    </>
  );
};

export default PostSlug;
