import * as ActionTypes from "./actionTypes";

const fetchMoviesStart = (payload) => ({
  type: ActionTypes.FETCH_MOVIES_START,
  payload: payload,
});
const fetchMoviesRequest = () => ({
  type: ActionTypes.FETCH_MOVIES_REQUEST,
});
const fetchMoviesSuccess = (movies) => ({
  type: ActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies,
});
const fetchMoviesFailure = (error) => ({
  type: ActionTypes.FETCH_MOVIES_FAILURE,
  payload: error,
});

const postMovieStart = (movie) => ({
  type: ActionTypes.POST_MOVIE_START,
  payload: movie,
});
const postMovieRequest = () => ({
  type: ActionTypes.POST_MOVIE_REQUEST,
});
const postMovieSuccess = () => ({
  type: ActionTypes.POST_MOVIE_SUCCESS,
});
const postMovieFailure = (error) => ({
  type: ActionTypes.POST_MOVIE_FAILURE,
  payload: error,
});

const deleteMovieStart = (id) => ({
  type: ActionTypes.DELETE_MOVIE_START,
  payload: id,
});
const deleteMovieRequest = () => ({
  type: ActionTypes.DELETE_MOVIE_REQUEST,
});
const deleteMovieSuccess = () => ({
  type: ActionTypes.DELETE_MOVIE_SUCCESS,
});
const deleteMovieFailure = (error) => ({
  type: ActionTypes.DELETE_MOVIE_FAILURE,
  payload: error,
});

const editMovieStart = (movie) => ({
  type: ActionTypes.EDIT_MOVIE_START,
  payload: movie,
});
const editMovieRequest = () => ({
  type: ActionTypes.EDIT_MOVIE_REQUEST,
});
const editMovieSuccess = () => ({
  type: ActionTypes.EDIT_MOVIE_SUCCESS,
});
const editMovieFailure = (error) => ({
  type: ActionTypes.EDIT_MOVIE_FAILURE,
  payload: error,
});

const setGenre = (genre) => ({
  type: ActionTypes.SET_GENRE,
  payload: genre,
});
const selectMovie = (id) => ({
  type: ActionTypes.SELECT_MOVIE,
  payload: { id: id },
});
const selectSortBy = (sortBy) => ({
  type: ActionTypes.SELECT_SORT_BY,
  payload: sortBy,
});
const submitSearch = (search) => ({
  type: ActionTypes.SUBMIT_SEARCH,
  payload: search,
});

export {
  fetchMoviesStart,
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  postMovieStart,
  postMovieRequest,
  postMovieSuccess,
  postMovieFailure,
  deleteMovieStart,
  deleteMovieRequest,
  deleteMovieSuccess,
  deleteMovieFailure,
  editMovieStart,
  editMovieRequest,
  editMovieSuccess,
  editMovieFailure,
  setGenre,
  selectMovie,
  selectSortBy,
  submitSearch,
};
