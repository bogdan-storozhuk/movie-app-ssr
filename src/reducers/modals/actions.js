import * as ActionTypes from "./actionTypes";
import { ModalTypes } from "../../assets/constants";

const openAddMovieModal = () => ({
  type: ActionTypes.OPEN_ADD_MOVIE_MODAL,
  payload: { modalType: ModalTypes.NEW },
});

const openEditMovieModal = (id) => ({
  type: ActionTypes.OPEN_EDIT_MOVIE_MODAL,
  payload: { id: id, modalType: ModalTypes.EDIT },
});

const openDeleteMovieModal = (id) => ({
  type: ActionTypes.OPEN_DELETE_MOVIE_MODAL,
  payload: { id: id, modalType: ModalTypes.DELETE },
});

const closeMovieModal = () => ({
  type: ActionTypes.CLOSE_MOVIE_MODAL,
});

export {
  openAddMovieModal,
  openEditMovieModal,
  openDeleteMovieModal,
  closeMovieModal,
};
