import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchSuperheroes = () => axios.get("http://localhost:4000/superheroes");

const RQSideEffectAssignment = () => {
  const [refetchIntervalTime, setRefetchIntervalTime] = useState(true);
  const successMessage = () => {
    console.log("Data fetching success", data);
    if (data?.data.length === 4) {
      setRefetchIntervalTime(false);
    }
  };
  const errorMessage = () => {
    console.log("Data fetching failed");
  };

  const { data, isLoading, isError, error } = useQuery(
    "super-heroes",
    fetchSuperheroes,
    {
      refetchInterval: 3000,
      refetchIntervalInBackground: refetchIntervalTime,
      onSuccess: successMessage,
      onError: errorMessage,
    }
  );

  console.log(isLoading);

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        {JSON.stringify(error)} - Error message : {error.message}
      </div>
    );

  return (
    <div className="basic-fetch">
      {data?.data.map((item) => (
        <div key={item.id}>
          <h2>{item?.name}</h2>
          <p>{item?.alterEgo}</p>
        </div>
      ))}
    </div>
  );
};
export default RQSideEffectAssignment;
