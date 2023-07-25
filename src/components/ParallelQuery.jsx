import React from "react";
import { useQuery } from "react-query";
import { superHerosApi, friendsApi } from "../api/api";

const ParallelQuery = () => {
  const { data: superHeorData } = useQuery("1-hero-query", superHerosApi);
  const { data: freindsData } = useQuery(["1-friend-query", 555], friendsApi);

  console.log("superHeorData", superHeorData);
  console.log("freindsData", freindsData);

  return (
    <div>
      <p>{JSON.stringify(superHeorData?.data)}</p>
      <p>{JSON.stringify(freindsData?.data)}</p>
    </div>
  );
};

export default ParallelQuery;
