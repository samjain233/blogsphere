import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const loginUrl = "api/auth/login";

const LoginUserApi = async (data) => {
  const { email, password } = data;
  return await axios
    .post(`${serverUrl}${loginUrl}`, {
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
export default LoginUserApi;
