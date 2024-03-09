import React from "react";
import { getPostByName } from "../../../../lib/getPostData";
import Navbar from "@/app/components/navbar/Navbar";
import InfoCards from "@/app/components/infoCards/InfoCards";
import { getBlog } from "../../../../lib/getBlog";
import { notFound } from "next/navigation";
import BlurHashImage from "@/app/components/customImage/BlurHashImage";

type paramsType = {
  params: {
    slug: string;
  };
};

export const revalidate = 3600;

export async function generateStaticParams() {
  const data = [
    { slug: "dfafadsf" },
    { slug: "best-places-to-visit-in-prayagraj" },
  ];
  return data;
}

export async function generateMetadata({ params: { slug } }: paramsType) {
  const res = await fetch(process.env.SERVER + "/api/getblog?slug=" + slug);
  if (!res.ok) {
    return undefined;
  }
  const data = await res.json();
  const { status, data: blogData } = data;

  if (!status) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: blogData.title,
    description: blogData.keyword,
    keywords: blogData.title,
  };
}

const wrapper: string =
  "sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto";

const slug = async ({ params: { slug } }: paramsType) => {
  const res = await fetch(process.env.SERVER + "/api/getblog?slug=" + slug);
  if (!res.ok) {
    return undefined;
  }
  const data = await res.json();
  const { status, data: blogData } = data;
  if (status === false) {
    notFound();
  }
  const { heading, blogUrl, imgUrl, title, blurHash } = blogData;
  const fileName = blogUrl;
  const { content } = await getPostByName(fileName);
  return (
    <>
      <Navbar />
      <div className={`flex flex-col md:flex-row mb-10 ${wrapper}`}>
        {/* content  */}
        <div className="mt-8 px-4 flex-auto w-full md:w-2/3">
          <div className="my-2">
            <div className="my-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {heading}
              </h1>
            </div>
            <div className="w-full h-auto">
              <BlurHashImage
                src={imgUrl}
                alt={title}
                blurHash={blurHash}
                height="400px"
              />
            </div>
          </div>

          <div className="main">
            <article className="info_body">{content}</article>
          </div>
          <hr className="w-full h-1 bg-[#184E77] mt-8" />
        </div>
        {/* side nav  */}
        <div className="flex-auto w-1/3 hidden md:block">
          <aside></aside>
        </div>
      </div>
      <div className={`${wrapper} px-4 md:px-0`}>
        <InfoCards />
      </div>
    </>
  );
};

export default slug;
