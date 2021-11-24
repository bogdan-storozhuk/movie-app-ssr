import React from 'react';
import PropTypes from 'prop-types';

import styles from './movieFormInput.css';

const MovieFormInput = ({
  handleChange, handleBlur, name, value,
}) => (
  <input
    className={styles.MovieFormInput}
    onChange={handleChange}
    onBlur={handleBlur}
    value={value}
    type="text"
    name={name}
    id={name}
  />
);

MovieFormInput.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MovieFormInput;
