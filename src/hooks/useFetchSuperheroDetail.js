import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperheroe = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

export const useFetchSuperheroDetail = (heroId) => {
  return useQuery(["single-super-hero", heroId], fetchSuperheroe);
};
