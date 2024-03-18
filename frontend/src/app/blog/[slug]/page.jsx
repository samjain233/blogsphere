import React from "react";
import Comments from "../../components/comments/Comments";
import Upvotes from "../../components/upvotes/Upvotes";
import Navbar from "@/app/components/navbar/Navbar";
import InfoCards from "@/app/components/infoCards/InfoCards";
import { notFound } from "next/navigation";
import { getBlogHtml } from "../../../../lib/getBlogHtml";

export async function generateMetadata({ params: { slug } }) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_SERVER + "api/blog/getblog?slug=" + slug,
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    return {
      title: "Post Not Found",
    };
  }
  const data = await res.json();
  const { success, data: BlogData } = data;
  if (success === false) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: BlogData?.title,
    description: BlogData?.category,
    keywords: BlogData?.title,
  };
}

const wrapper =
  "sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto";

const slug = async ({ params: { slug } }) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_SERVER + "api/blog/getblog?slug=" + slug,
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  const { success, data: BlogData } = data;
  if (success === false) {
    notFound();
  }
  const { content , author} = BlogData;
  const { content: reactComponents } = await getBlogHtml(content);
  return (
    <>
      <Navbar />
      <div className={`flex flex-col md:flex-row mb-10 ${wrapper}`}>
        {/* content  */}
        <div className="mt-8 px-4 flex-auto w-full md:w-2/3">
          <div className="main">
            <article className="info_body">{reactComponents}</article>
          </div>
          <hr className="w-full h-1 bg-[#184E77] mt-8" />
        </div>
        {/* side nav  */}
        <div className="flex-auto w-1/3 hidden md:block">
          <aside></aside>
        </div>
      </div>
      <div className={`${wrapper} px-4 md:px-0`}>
        <Upvotes slug={slug} author={author}/>
      </div>
      <div className={`${wrapper} px-4 md:px-0`}>
        <Comments slug={slug} />
      </div>
      <div className={`${wrapper} px-4 md:px-0`}>
        <InfoCards />
      </div>
    </>
  );
};

export default slug;
