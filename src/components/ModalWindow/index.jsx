import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

import MovieForm from '../MovieForm';
import DeleteConformation from '../DeleteConformation';
import Title from '../Title';

import { ModalTypes } from '../../assets/constants';

import { closeMovieModal } from '../../reducers/modals/actions';
import {
  showModalSelector,
  modalTypeSelector,
} from '../../reducers/modals/selectors';
import { selectedMovieSelector } from '../../reducers/movies/selectors';

import styles from './modalWindow.css';

const ModalWindow = ({
  closeMovieModal, show, modalType, selectedMovie,
}) => {
  let titleMessage;
  if (modalType === ModalTypes.NEW) {
    titleMessage = 'ADD MOVIE';
  } else if (modalType === ModalTypes.EDIT) {
    titleMessage = 'EDIT MOVIE';
  } else if (modalType === ModalTypes.DELETE) {
    titleMessage = 'DELETE MOVIE';
  }

  return (
    <Modal
      className={styles.ModalWindow}
      show={show}
      onHide={closeMovieModal}
      centered
      size={modalType === ModalTypes.DELETE ? 'md' : 'lg'}
    >
      <Modal.Header className={styles.ModalWindowHeader} closeButton>
        <Title>{titleMessage}</Title>
      </Modal.Header>
      <Modal.Body className={styles.ModalWindowBody}>
        {modalType === ModalTypes.DELETE ? (
          <DeleteConformation id={selectedMovie.id} />
        ) : (
          <MovieForm
            closeMovieModal={closeMovieModal}
            selectedMovie={selectedMovie}
          />
        )}
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = createStructuredSelector({
  show: showModalSelector,
  modalType: modalTypeSelector,
  selectedMovie: selectedMovieSelector,
});

function mapDispatchToProps(dispatch) {
  return {
    closeMovieModal: () => dispatch(closeMovieModal()),
  };
}

ModalWindow.propTypes = {
  closeMovieModal: PropTypes.func,
  show: PropTypes.bool,
  modalType: PropTypes.string,
  selectedMovie: PropTypes.shape({
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })),
    id: PropTypes.number,
    overview: PropTypes.string,
    posterPath: PropTypes.string,
    releaseDate: PropTypes.string,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
    title: PropTypes.string,
    voteAverage: PropTypes.number,
    voteCount: PropTypes.number,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
