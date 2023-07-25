import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchSuperheroe = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

// export const useFetchSuperheroDetail = (heroId) => {
//   return useQuery(["single-super-hero", heroId], fetchSuperheroe);
// };

export const useFetchSuperheroDetail = (heroId) => {
  const queryClient = useQueryClient();

  const fetchCatched = () => {
    const hero = queryClient
      .getQueryData("all-super-heroes")
      ?.data.find((hero) => hero.id === parseInt(heroId));

    if (hero) {
      return { data: hero };
    } else {
      return undefined;
    }
  };

  return useQuery(["single-super-hero", heroId], fetchSuperheroe, {
    initialData: fetchCatched,
  });
};
