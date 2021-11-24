import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import { Toast } from 'react-bootstrap';

import {
  openDeleteMovieModal,
  openEditMovieModal,
} from '../../reducers/modals/actions';

import styles from './movieListItemMenu.css';

const MovieListItemMenu = ({
  id,
  openEditMovieModal,
  openDeleteMovieModal,
}) => {
  const [show, setShow] = useState(true);
  const onToggleMenu = (e) => {
    e.stopPropagation();
    setShow(!show);
  };
  const onEditMovieClick = (e) => {
    e.stopPropagation();
    openEditMovieModal(id);
  };
  const onDeleteMovieClick = (e) => {
    e.stopPropagation();
    openDeleteMovieModal(id);
  };

  return (
    <div className={styles.MovieListItemMenu}>
      <button
        className={styles.MovieListItemMenuToggle}
        onClick={onToggleMenu}
        data-testid="movie-list-item-toggle"
      >
        <ThreeDotsVertical />
      </button>
      <Toast onClose={onToggleMenu} show={!show}>
        <Toast.Header />
        <Toast.Body>
          <ul className={styles.MovieListItemMenuControls}>
            <li>
              <span onClick={onEditMovieClick} className={styles.ControlsSpan}>
                Edit
              </span>
            </li>
            <li>
              <span onClick={onDeleteMovieClick} className={styles.ControlsSpan}>
                Delete
              </span>
            </li>
          </ul>
        </Toast.Body>
      </Toast>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    openDeleteMovieModal: id => dispatch(openDeleteMovieModal(id)),
    openEditMovieModal: id => dispatch(openEditMovieModal(id)),
  };
}

MovieListItemMenu.propTypes = {
  id: PropTypes.number,
  openDeleteMovieModal: PropTypes.func,
  openEditMovieModal: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(MovieListItemMenu);
