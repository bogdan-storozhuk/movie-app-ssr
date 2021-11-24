import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import moviesReducer, {
  watchFetchMovies,
  watchPostMovie,
  watchDeleteMovie,
  watchEditMovie,
} from './movies/moviesReducer';
import modalsReducer from './modals/modalsReducer';

export default combineReducers({
  moviesReducer,
  modalsReducer,
});

export function* rootSaga() {
  yield all([
    watchFetchMovies(),
    watchPostMovie(),
    watchDeleteMovie(),
    watchEditMovie(),
  ]);
}
