import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const getUserProfileUrl = "api/blog/userprofileview";

const GetUserProfileApi = async (data) => {
  const { userId } = data;
  return await axios
    .post(`${serverUrl}${getUserProfileUrl}`, {
      userId,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default GetUserProfileApi;
