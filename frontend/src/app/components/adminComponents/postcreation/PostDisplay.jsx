import React from "react";

import ReactMarkdown from "react-markdown";
import CustomImageComponent from "../../customImage/CustomImage";
import rehypeRaw from "rehype-raw";
import { FaEyeSlash } from "react-icons/fa6";

const PostDisplay = ({ markdown ,setDisplayPost }) => {
  return (
    <>
      <div className="main">
        <div className="info_body">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              img: (props) => {
                return <CustomImageComponent src={props.src} alt={props.alt} />;
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <div
          className="text-2xl p-4 my-2 bg-gray-500 text-white rounded-full cursor-pointer hover:bg-gray-600 transition-colors duration-200"
          onClick={() => {
            setDisplayPost(false);
          }}
        >
          <FaEyeSlash />
        </div>
      </div>
    </>
  );
};

export default PostDisplay;
