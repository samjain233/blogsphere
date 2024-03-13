import CustomImage from "@/app/components/customImage/CustomImage";
import { compileMDX } from "next-mdx-remote/rsc";

const gitUrl: string =
  "https://raw.githubusercontent.com/samjain233/blog-server/main/blogs/";

const getPostByName = async (fileName: string): Promise<any> => {
  // console.log(gitUrl + fileName);
  const res = await fetch(`${gitUrl}${fileName}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!res.ok) {
    return undefined;
  }
  const rawMDX = await res.text();
  console.log(rawMDX);

  // if file not exists
  if (rawMDX === "404: Not Found") return undefined;

  //converting file to html code
  console.log(rawMDX);

  const { content, frontmatter } = await compileMDX<{
    title: string | undefined;
  }>({
    source: rawMDX,
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

export { getPostByName };
