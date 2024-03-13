import CustomImage from "@/app/components/customImage/CustomImage";
import { compileMDX } from "next-mdx-remote/rsc";

const getBlogHtml = async (markdown) => {
  const { content, frontmatter } = await compileMDX({
    source: markdown,
    components: {
      CustomImage,
    },
    options: {
      parseFrontmatter: true,
    },
  });

  const blogPostObj = {
    meta: { title: frontmatter.title ? frontmatter.title : "trippify" },
    content,
  };
  return blogPostObj;
};

export { getBlogHtml };
