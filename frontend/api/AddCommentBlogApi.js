import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const addCommentUrl = "api/blog/commentsblog";

const AddCommentApi = async (data) => {
  const { slug, comment, token } = data;
  return await axios
    .post(
      `${serverUrl}${addCommentUrl}`,
      {
        slug,
        message: comment,
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
export default AddCommentApi;
