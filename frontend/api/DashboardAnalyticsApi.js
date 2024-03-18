import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const dashboardAnalyticsUrl = "api/blog/dashboardanalytics";

const DashboardApi = async (data) => {
  const { token } = data;
  return await axios
    .post(
      `${serverUrl}${dashboardAnalyticsUrl}`,
      {},
      {
        headers: { Authorization: "Bearer " + token },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default DashboardApi;
