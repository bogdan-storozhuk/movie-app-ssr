import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import GenreItem from '../GenreItem';

import { getGenreList } from '../../utils';

import { genreSelector } from '../../reducers/movies/selectors';

import styles from './genreToggle.css';

const GenreToggle = ({ genre }) => {
  const getSelectedGenre = selectedGenre =>
    selectedGenre === genre && 'selectedGenre';

  return (
    <ul className={styles.genreList}>
      {getGenreList(true).map(genre => (
        <GenreItem
          key={genre.id}
          genre={genre}
          getSelectedGenre={getSelectedGenre}
        />
      ))}
    </ul>
  );
};

GenreToggle.propTypes = {
  genre: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  genre: genreSelector,
});

export default connect(mapStateToProps)(GenreToggle);
