import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const upvotePostUrl = "api/blog/upvotepost";

const UpvotePostApi = async (data) => {
  const { slug, token } = data;
  return await axios
    .post(
      `${serverUrl}${upvotePostUrl}`,
      {
        slug,
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
export default UpvotePostApi;
