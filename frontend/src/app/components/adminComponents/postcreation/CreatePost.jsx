import React, { useState } from "react";
import PostContent from "./PostContent";
import PostDisplay from "./PostDisplay";

const CreatePost = () => {
  const [markdown, setMarkdown] = useState("");
  const [displayPost, setDisplayPost] = useState(false);
  return (
    <>
      <div className="py-4 px-[8%]">
        {!displayPost && (
          <PostContent
            markdown={markdown}
            setMarkdown={setMarkdown}
            setDisplayPost={setDisplayPost}
          />
        )}
        {displayPost && (
          <PostDisplay markdown={markdown} setDisplayPost={setDisplayPost} />
        )}
      </div>
    </>
  );
};

export default CreatePost;
