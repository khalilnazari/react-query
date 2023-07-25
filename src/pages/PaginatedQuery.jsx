import React, { useState } from "react";
import { useQuery } from "react-query";
import { colorsApi } from "../api/api";

const PaginatedQuery = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const {
    data: colorsData,
    isLoading,
    isError,
    error,
  } = useQuery(["colors", pageNumber], () => colorsApi(pageNumber), {
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>{error?.message}</div>;

  return (
    <div style={{ marginTop: "20px" }}>
      {colorsData?.data.map((color) => {
        return (
          <div
            key={color.id}
            style={{
              backgroundColor: "#f8f8f8",
              padding: "10px",
              marginBottom: "5px",
            }}
          >
            <strong>{color.label}</strong>
          </div>
        );
      })}

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setPageNumber((prev) => prev - 1)}
          disabled={pageNumber < 2}
        >
          Perv Page
        </button>
        <button
          onClick={() => setPageNumber((prev) => prev + 1)}
          disabled={pageNumber > 3}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PaginatedQuery;
