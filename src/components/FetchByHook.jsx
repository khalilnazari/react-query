import React from "react";
import { useFetchSuperheroes } from "../hooks/useFetchSuperheroes";

const FetchByHook = () => {
  const onSuccess = () => console.log("On success");
  const onError = () => console.log("On error");

  const { isError, error, isLoading, data } = useFetchSuperheroes(
    onSuccess,
    onError
  );

  if (isError) return <div>{JSON.stringify(error)}</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data?.data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default FetchByHook;
