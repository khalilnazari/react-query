import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperheroes = () => axios.get("http://localhost:4000/superheroes");

export const useFetchSuperheroes = (onSuccess, onError) => {
  return useQuery("all-super-heroes", fetchSuperheroes, {
    onSuccess,
    onError,
  });
};
