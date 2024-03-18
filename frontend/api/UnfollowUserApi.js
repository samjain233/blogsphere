import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const unfollowUserUrl = "api/blog/unfollow";

const UnFollowUserApi = async (data) => {
  const { userId, token } = data;
  return await axios
    .post(
      `${serverUrl}${unfollowUserUrl}`,
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
export default UnFollowUserApi;
