import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const getAllBlogsUrl = "api/auth/getallblogs";

const GetAllBlogsApi = async (data) => {
  const { slug } = data;
  return await axios
    .post(`${serverUrl}${getAllBlogsUrl}`, {
      slug,
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default GetAllBlogsApi;
