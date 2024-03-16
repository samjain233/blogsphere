import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const updateBlogUrl = "api/blog/updateblog";

const UpdateBlogApi = async (data) => {
  const { slug, title, content, imageUrl, keywords, token, category, blogId } =
    data;
  return await axios
    .post(
      `${serverUrl}${updateBlogUrl}`,
      {
        slug,
        title,
        content,
        imageUrl,
        keywords,
        category,
        blogId,
      },
      {
        headers: { Authorization: "Bearer " + token },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default UpdateBlogApi;
