import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const getBlogUrl = "api/blog/newlyuploadedpost";

const GetNewlyBlogApi = async () => {
  return await axios
    .get(`${serverUrl}${getBlogUrl}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default GetNewlyBlogApi;
