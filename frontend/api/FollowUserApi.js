import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const followUserUrl = "api/blog/follow";

const FollowUserApi = async (data) => {
  const { userId, token } = data;
  return await axios
    .post(
      `${serverUrl}${followUserUrl}`,
      {
        userId,
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
export default FollowUserApi;
