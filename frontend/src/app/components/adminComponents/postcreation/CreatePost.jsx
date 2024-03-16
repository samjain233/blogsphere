import React, { useState } from "react";
import PostContent from "./PostContent";
import PostDisplay from "./PostDisplay";

const CreatePost = ({
  markdown,
  setMarkdown,
  title,
  setTitle,
  slug,
  setSlug,
  keywords,
  setKeywords,
  category,
  setCategory,
  mainImageUrl,
  setMainImageUrl,
  blogId,
  setTab
}) => {
  const [displayPost, setDisplayPost] = useState(false);
  return (
    <>
      <div className="py-4 px-[8%]">
        {!displayPost && (
          <PostContent
            markdown={markdown}
            setMarkdown={setMarkdown}
            setDisplayPost={setDisplayPost}
            title={title}
            setTitle={setTitle}
            slug={slug}
            setSlug={setSlug}
            keywords={keywords}
            setKeywords={setKeywords}
            category={category}
            setCategory={setCategory}
            mainImageUrl={mainImageUrl}
            setMainImageUrl={setMainImageUrl}
            blogId={blogId}
            setTab={setTab}
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
