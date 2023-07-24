import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const RQDataTransoform = () => {
  const { data, isError, error, isLoading } = useQuery(
    "super-heroes",
    () => {
      return axios.get("http://localhost:4000/superheroes");
    },
    {
      // data transformation
      select: (data) => {
        // only hero names
        const onlynames = data.data.map((hero) => hero.name);

        // only hero with id 1
        const heroWithIdOne = data.data.find((hero) => hero.id === 1);
        return { onlynames, heroWithIdOne };
      },
    }
  );

  console.log(data);
  console.log("Render component");
  return <div>RQDataTransoform</div>;
};

export default RQDataTransoform;
