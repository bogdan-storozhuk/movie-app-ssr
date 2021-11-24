import React from 'react';
import PropTypes from 'prop-types';

import styles from './movieCount.css';

const MovieCount = ({ count }) => (
  <p className={styles.MovieCount}>
    <span className={styles.MovieCountNumber}>{count}</span> movies found
  </p>
);

MovieCount.propTypes = {
  count: PropTypes.number,
};

export default MovieCount;
