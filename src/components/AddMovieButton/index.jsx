import React from "react";
import PropTypes from "prop-types";

import styles from "./addMovieButton.css";

const AddMovieButton = ({ openAddMovieModal }) => (
  <button onClick={openAddMovieModal} className={styles.AddMovieButton}>
    + ADD MOVIE
  </button>
);

AddMovieButton.propTypes = {
  openAddMovieModal: PropTypes.func,
};

export default AddMovieButton;
