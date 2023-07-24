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
  const rqOptions = {
    // default catchTime is 5min, but it can changed to a desired time like 5sec
    // cacheTime: 5000,
    //
    // Default staleTime is 0sec, but it can changed like below to 30sec
    // staleTime: 30000,
    //
    // refetch
    // refetchOnMount: true, // false | true | 'always'
    //
    // auto fetch when focus on window
    // refetchOnWindowFocus: true, // false, true, 'alawys'
    //
    // Polling data : fetch data at regular intervals (when focus on window)
    // refetchInterval: 2000, // every 2sec fetch data
    //
    // Polling data: fetch data at regular intervals (in background )
    // refetchIntervalInBackground: false, // true, false, 'always'
    //
  };

  const { data, isLoading, isError, error } = useQuery(
    "super-heroes",
    fetchSuperheroes,
    rqOptions
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
