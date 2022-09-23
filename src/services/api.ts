import axios from "axios";

const Api = axios.create({
  baseURL: "https://g-udrk.onrender.com",
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
