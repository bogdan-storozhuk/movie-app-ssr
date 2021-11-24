import React from 'react';
import PropTypes from 'prop-types';

import { getFormatedGenresDescription } from '../../utils';

import styles from './genresDescription.css';

const GenresDescription = ({ genres }) => (
  <p className={styles.GenresDescription}>
    {genres.length !== 0 ? getFormatedGenresDescription(genres) : 'No genres'}
  </p>
);

GenresDescription.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
};

export default GenresDescription;
