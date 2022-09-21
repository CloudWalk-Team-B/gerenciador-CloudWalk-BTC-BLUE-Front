import axios from "axios";

const Api = axios.create({
  baseURL: "http://34.134.206.248",
});

Api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
    console.error(error);
  }
});

export default Api;
