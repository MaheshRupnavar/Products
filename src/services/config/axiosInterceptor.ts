import axios from 'axios';


let headers = {};

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    // const token = await AsyncStorage.getItem(ASYNCH_ENUMS.ACCESS_TOKEN);
    const token = "";
    if (token) {
      //FIXME:CHANGE TOKEN
      config.headers.Authorization = ``;
    } else {
      config.headers.Authorization = '';
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
