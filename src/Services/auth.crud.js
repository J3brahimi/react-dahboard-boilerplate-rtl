import axios from "./Api";

export const loginUser = body =>
  axios.post(`/users/login`, JSON.stringify(body));

export const registerUser = body =>
  axios.post(`/users/register`, JSON.stringify(body));
