import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const getCountUpvotesUrl = "api/blog/getcountupvotes";

const GetCountUpvotesApi = async (data) => {
  const { slug } = data;
  return await axios
    .post(`${serverUrl}${getCountUpvotesUrl}`, {
      slug,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default GetCountUpvotesApi;
