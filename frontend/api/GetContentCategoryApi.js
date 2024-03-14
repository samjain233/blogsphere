import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const getContentCategoryUrl = "api/auth/createcontent";

const GetContentCategoryApi = async (data) => {
  const { categories } = data;
  return await axios
    .get(`${serverUrl}${getContentCategoryUrl}`, {
      categories
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default GetContentCategoryApi;
