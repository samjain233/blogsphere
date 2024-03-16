import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const getAllUserBlogsUrl = "api/blog/getalluserblogs";

const GetAllBlogsApi = async (data) => {
  const { token } = data;
  return await axios
    .post(
      `${serverUrl}${getAllUserBlogsUrl}`,
      {},
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
export default GetAllBlogsApi;
