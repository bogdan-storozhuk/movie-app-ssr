import React from "react";
import useFetch from "./useFetch";

const useQuery = (search) => {
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export { useQuery, useFetch };
