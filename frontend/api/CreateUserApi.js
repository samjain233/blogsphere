import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const registerUrl = "api/auth/register";

const CreateUserApi = async (data) => {
  const { username, email, password } = data;
  return await axios
    .post(`${serverUrl}${registerUrl}`, {
      username,
      email,
      password,
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
