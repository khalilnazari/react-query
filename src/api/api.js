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
