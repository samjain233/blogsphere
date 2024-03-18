import React, { useEffect, useState } from "react";
import ManagePostCard from "./ManagePostCard";
import getAllBlogsApi from "../../../../../api/getAllUserPostApi";

const ManagePostHome = ({
  setMarkdown,
  setTitle,
  setSlug,
  setKeywords,
  setCategory,
  setMainImageUrl,
  setTab,
  setBlogId,
}) => {
  const [myPost, setMyPost] = useState([]);
  useEffect(() => {
    setMarkdown("");
    setTitle("");
    setSlug("");
    setKeywords([]);
    setCategory("");
    setMainImageUrl(null);
    const token = localStorage.getItem("token");
    if (token) {
      getAllBlogsApi({ token }).then((data) => {
        if (data.success) {
          setMyPost(data.data.blogs);
        }
      });
    }
  }, []);

  const reload = () => {
    const token = localStorage.getItem("token");
    if (token) {
      getAllBlogsApi({ token }).then((data) => {
        if (data.success) {
          setMyPost(data.data.blogs);
        }
      });
    }
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-2 px-8 mt-8">
        {myPost.map((post, index) => {
          return (
            <div key={index}>
              <ManagePostCard
                postData={post}
                setTitle={setTitle}
                setSlug={setSlug}
                setKeywords={setKeywords}
                setCategory={setCategory}
                setMainImageUrl={setMainImageUrl}
                setMarkdown={setMarkdown}
                setTab={setTab}
                setBlogId={setBlogId}
                reload={reload}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ManagePostHome;
