import { call, put, takeEvery, select } from 'redux-saga/effects';

import * as ActionTypes from './actionTypes';
import * as ModalsActionTypes from '../modals/actionTypes';
import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  postMovieRequest,
  postMovieSuccess,
  postMovieFailure,
  deleteMovieRequest,
  deleteMovieSuccess,
  deleteMovieFailure,
  editMovieRequest,
  editMovieSuccess,
  editMovieFailure,
} from './actions';
import { searchOptionsSelector } from './selectors';
import * as api from '../../services/movieService';

const initialState = {
  search: '',
  movies: [],
  loading: false,
  error: null,
  genre: 'All',
  sortBy: 'releaseDate',
  selectedMovie: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        movies: [],
        loading: true,
        error: null,
      };
    case ActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        movies: [],
        loading: false,
        error: action.payload,
      };

    case ActionTypes.POST_MOVIE_REQUEST:
    case ActionTypes.DELETE_MOVIE_REQUEST:
    case ActionTypes.EDIT_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.POST_MOVIE_SUCCESS:
    case ActionTypes.DELETE_MOVIE_SUCCESS:
    case ActionTypes.EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ActionTypes.POST_MOVIE_FAILURE:
    case ActionTypes.DELETE_MOVIE_FAILURE:
    case ActionTypes.EDIT_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.SET_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionTypes.SUBMIT_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case ModalsActionTypes.OPEN_EDIT_MOVIE_MODAL:
    case ModalsActionTypes.OPEN_DELETE_MOVIE_MODAL:
    case ActionTypes.SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: state.movies.find(element => element.id === action.payload.id),
      };
    case ModalsActionTypes.CLOSE_MOVIE_MODAL:
      return {
        ...state,
        selectedMovie: null,
      };
    case ActionTypes.SELECT_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;

export function* fetchMoviesAsync(action) {
  try {
    yield put(fetchMoviesRequest());
    const data = yield call(api.getMoviesAsync, action.payload);
    yield put(fetchMoviesSuccess(data));
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

export function* watchFetchMovies() {
  yield takeEvery(ActionTypes.FETCH_MOVIES_START, fetchMoviesAsync);
}

export function* postMovieAsync(action) {
  try {
    yield put(postMovieRequest());
    yield call(api.postMovie, action.payload);
    yield put(postMovieSuccess());
    const searchOptions = yield select(searchOptionsSelector);
    yield call(fetchMoviesAsync, { payload: searchOptions });
  } catch (error) {
    yield put(postMovieFailure(error));
  }
}

export function* watchPostMovie() {
  yield takeEvery(ActionTypes.POST_MOVIE_START, postMovieAsync);
}

export function* deleteMovieAsync(action) {
  try {
    yield put(deleteMovieRequest());
    yield call(api.deleteMovie, action.payload);
    yield put(deleteMovieSuccess());
    const searchOptions = yield select(searchOptionsSelector);
    yield call(fetchMoviesAsync, { payload: searchOptions });
  } catch (error) {
    yield put(deleteMovieFailure(error));
  }
}

export function* watchDeleteMovie() {
  yield takeEvery(ActionTypes.DELETE_MOVIE_START, deleteMovieAsync);
}

export function* editMovieAsync(action) {
  try {
    yield put(editMovieRequest());
    yield call(api.editMovie, action.payload);
    yield put(editMovieSuccess());
    const searchOptions = yield select(searchOptionsSelector);
    yield call(fetchMoviesAsync, { payload: searchOptions });
  } catch (error) {
    yield put(editMovieFailure(error));
  }
}

export function* watchEditMovie() {
  yield takeEvery(ActionTypes.EDIT_MOVIE_START, editMovieAsync);
}
