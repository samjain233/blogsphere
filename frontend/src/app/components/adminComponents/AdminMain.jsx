import React, { useEffect, useState } from "react";
import SidePanel from "./SidePanel";
import AdminDashboard from "./AdminDashboard";
import CreatePost from "./postcreation/CreatePost";
import ManagePostHome from "./managepost/ManagePostHome";

const AdminMain = () => {
  const [tab, setTab] = useState("Dashboard");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [category, setCategory] = useState("");
  const [mainImageUrl, setMainImageUrl] = useState(null);
  const [markdown, setMarkdown] = useState("");
  const [blogId, setBlogId] = useState(null);

  return (
    <>
      <div className="w-full grid grid-cols-5">
        <SidePanel tab={tab} setTab={setTab} setBlogId={setBlogId}/>
        <div className="col-span-4">
          {tab === "Dashboard" && <AdminDashboard />}
          {tab === "Create Post" && (
            <CreatePost
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
              markdown={markdown}
              setMarkdown={setMarkdown}
              blogId={blogId}
              setTab={setTab}
            />
          )}
          {tab === "Manage Post" && (
            <ManagePostHome
              setTitle={setTitle}
              setSlug={setSlug}
              setKeywords={setKeywords}
              setCategory={setCategory}
              setMainImageUrl={setMainImageUrl}
              setMarkdown={setMarkdown}
              setTab={setTab}
              setBlogId={setBlogId}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminMain;
