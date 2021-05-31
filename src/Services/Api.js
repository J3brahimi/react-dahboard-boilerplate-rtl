import axios from "axios";
import store from "Store/store";
import { toast } from "Utils/toast";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_URL_BASE}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

const getFromStore = () => {
  const state = store.getState();
  return {
    token: state?.user?.token ? `Bearer ${state.user.token}` : "",
  };
};

api.interceptors.request.use(
  config => {
    const { token } = getFromStore();
    config.headers = { ...config.headers, authorization: token };
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    if (response.status === 401) {
      // your failure logic
    }
    return response;
  },
  error => {
    showError(error);
    return Promise.reject(error); //when use showError, we dont need to write this line of code
  },
);

export const showError = ({ response }) => {
  const messages = [];
  if (!response) return messages.push("Network error");
  switch (response?.status) {
    case 422:
      let text = Object.values(response.data.errors);
      messages.push(...text);
      break;
    case 404:
      messages.push("404 Not Found");
      break;
    case 500:
      messages.push("500 Server Error");
      break;
    default:
      messages.push(`Error ${response.status}`);
      break;
  }
  messages.map(message => toast(message, "error"));
};

export default api;
