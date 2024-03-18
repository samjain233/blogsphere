import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const checkFollowUrl = "api/blog/checkififollow";

const CheckIfIFollowApi = async (data) => {
  const { userId, token } = data;
  return await axios
    .post(
      `${serverUrl}${checkFollowUrl}`,
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
export default CheckIfIFollowApi;
