import axios from "axios";
import React, { useEffect, useState } from "react";

// const BasicRQFetch = () => {
//   const [superheroes, setSuperheroes] = useState([]);

//   const fetchData = async () => {
//     const response = await axios.get("http://localhost:4000/superheroes");
//     setSuperheroes(response.data);
//   };

//   useEffect(() => {
//     fetchData();
//   });

//   return (
//     <div className="basic-fetch">
//       {superheroes.length !== 0 ? (
//         superheroes.map((item) => (
//           <div key={item.id}>
//             <h2>{item.name}</h2>
//             <p>{item.alterEgo}</p>
//           </div>
//         ))
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// Step 1: import useQuery hook
import { useQuery } from "react-query";

const fetchSuperheroes = () => axios.get("http://localhost:4000/superheroes");

const BasicRQFetch = () => {
  const { data, isLoading, isError, error } = useQuery(
    "super-heroes",
    fetchSuperheroes
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
export default BasicRQFetch;
