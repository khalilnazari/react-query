import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperheroes = () => axios.get("http://localhost:4000/superheroes");

const RQSideEffect = () => {
  const successMessage = () => console.log("Data fetching success");
  const errorMessage = () => console.log("Data fetching failed");

  const { data, isLoading, isError, error } = useQuery(
    "super-heroes",
    fetchSuperheroes,
    {
      onSuccess: successMessage,
      onError: errorMessage,
    }
  );

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
export default RQSideEffect;
