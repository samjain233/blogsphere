import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const createBlogUrl = "api/blog/postblog";

const CreateUserApi = async (data) => {
    const { slug, title, content, imageUrl, keywords , token } = data;
    return await axios
        .post(`${serverUrl}${createBlogUrl}`, {
            slug, title, content, imageUrl, keywords
        }, {
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
export default CreateUserApi;
