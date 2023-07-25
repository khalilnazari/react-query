import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const friendsApi = () => {
  return axios.get(`${BASE_URL}/friends`);
};

export const superHerosApi = () => {
  return axios.get(`${BASE_URL}/superheroes`);
};

export const fetchDynamicHero = (id) => {
  return axios.get(`${BASE_URL}/superheroes/${id}`);
};

export const userApi = (email) => {
  return axios.get(`${BASE_URL}/users/${email}`);
};

export const channelApi = (channelId) => {
  return axios.get(`${BASE_URL}/channels/${channelId}`);
};

export const colorsApi = (pageNumber) => {
  return axios.get(`${BASE_URL}/colors?_limit=2&_page=${pageNumber}`);
};
