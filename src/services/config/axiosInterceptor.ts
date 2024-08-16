import axios from 'axios';


let headers = {};

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/products",
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
    // console.log('config', config)
    return config;
  },
  error => {
    // console.log('error', error)
    return Promise.reject(error);
  },
);

export default axiosInstance;
