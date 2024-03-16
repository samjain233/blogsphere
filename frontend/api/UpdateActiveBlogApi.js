import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const loginUrl = "api/blog/updateactiveblog";

const UpdateActiveBlogApi = async (data) => {
  const { postId, isActive, token } = data;
  return await axios
    .put(
      `${serverUrl}${loginUrl}`,
      {
        postId,
        isActive,
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
export default UpdateActiveBlogApi;
