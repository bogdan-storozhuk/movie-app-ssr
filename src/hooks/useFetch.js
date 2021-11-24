import { useState, useEffect } from "react";

import { mapMovieJson, formatMoviesArray } from "../utils";

const useFetch = (source) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      new Promise((resolve) => {
        const movies = source.slice(0, 20);
        const mappedMovies = mapMovieJson(movies);
        resolve(formatMoviesArray(mappedMovies));
      })
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, [source]);
  return { data, isLoading, error };
};

export default useFetch;
