import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const deleteBlogUrl = "api/blog/deletetblog";

const DeleteBlogApi = async (data) => {
  const { blogId, token } = data;
  return await axios
    .post(
      `${serverUrl}${deleteBlogUrl}`,
      {
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
export default DeleteBlogApi;
