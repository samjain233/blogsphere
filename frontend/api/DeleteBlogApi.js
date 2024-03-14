import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const deleteBlogUrl = "api/auth/deletetblog";

const DeleteBlogApi = async (data) => {
  const { blog, token } = data;
  return await axios
    .delete(`${serverUrl}${deleteBlogUrl}`, {
        blog
    },{
        Authorization: token
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default DeleteBlogApi;
