import React from "react";
import { useFetchSuperheroes } from "../hooks/useFetchSuperheroes";

const SuperHeros = () => {
  const { isLoading, isError, error, data } = useFetchSuperheroes();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>{JSON.stringify(error)}</div>;

  return (
    <div>
      <ul>
        {data?.data.map((item) => (
          <li key={item.id}>
            <a href={`/super-heros/${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuperHeros;
