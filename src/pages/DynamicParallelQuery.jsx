import { useQueries } from "react-query";
import { fetchDynamicHero } from "../api/api";

const DynamicParallelQuery = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((heroId) => {
      return {
        queryKey: ["super-hero", heroId],
        queryFn: () => fetchDynamicHero(heroId),
      };
    })
  );

  console.log(queryResults);

  return <div>DynamicParallelQuery</div>;
};

export default DynamicParallelQuery;
