import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const getBlogUrl = "api/auth/getblog";

const GetBlogApi = async (data) => {
  const {slug } = data;
  return await axios
    .post(`${serverUrl}${getBlogUrl}`, {
      slug
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default GetBlogApi;
