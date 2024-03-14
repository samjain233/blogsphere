import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const loginUrl = "api/auth/updateactiveblog";

const UpdateActiveBlogApi = async (data) => {
  const { postId, isActive, token  } = data;
  return await axios
    .put(`${serverUrl}${loginUrl}`, {
        postId, isActive 
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
export default UpdateActiveBlogApi;
