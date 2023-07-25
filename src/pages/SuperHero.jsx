import React from "react";
import { useFetchSuperheroDetail } from "./../hooks/useFetchSuperheroDetail";
import { useParams, useRoutes } from "react-router-dom";

const SuperHero = () => {
  // const route = useRoutes();
  // console.log(route);
  const params = useParams();
  const { isLoading, isError, error, data } = useFetchSuperheroDetail(
    params.heroId
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>{JSON.stringify(error)}</div>;

  return (
    <div>
      <div>
        <strong>Superhero detail</strong> : {data?.data.name}
      </div>
    </div>
  );
};

export default SuperHero;
