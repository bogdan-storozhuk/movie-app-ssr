import {
  mapMovieJson,
  formatMoviesArray,
  mapMovieFieldNameToBackEndFormat,
  mapMovieJsonToBackEndFormat,
} from '../utils';

const apiBase = 'http://localhost:4000';

const getMoviesAsync = async ({ genre, search, sortBy }) => {
  let url = `${apiBase}/movies/?limit=${30}`;
  if (genre && genre !== 'All') {
    url += `&filter=${genre}`;
  }
  if (search) {
    url += `&searchBy=title&search=${search}`;
  }
  if (sortBy) {
    url += `&sortBy=${mapMovieFieldNameToBackEndFormat(sortBy)}&sortOrder=desc`;
  }
  const res = await fetch(url);
  const { data } = await res.json();
  const mappedMovies = mapMovieJson(data);
  return formatMoviesArray(mappedMovies);
};

const postMovie = async (movie) => {
  const reformatedMovie = mapMovieJsonToBackEndFormat(movie);
  const response = await fetch(`${apiBase}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(reformatedMovie),
  });
  return await response.json();
};

const deleteMovie = async (id) => {
  await fetch(`${apiBase}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};

const editMovie = async (movie) => {
  const reformatedMovie = mapMovieJsonToBackEndFormat(movie);
  const response = await fetch(`${apiBase}/movies`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(reformatedMovie),
  });
  return await response.json();
};

export { getMoviesAsync, postMovie, deleteMovie, editMovie };
