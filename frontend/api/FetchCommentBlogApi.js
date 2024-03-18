import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const fetchCommentUrl = "api/blog/getcomments";

const FetchCommentApi = async (data) => {
  const { slug} = data;
  return await axios
    .post(
      `${serverUrl}${fetchCommentUrl}`,
      {
        slug,
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
export default FetchCommentApi;
