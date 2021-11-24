import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import MovieListItemMenu from '../MovieListItemMenu';
import GenresDescription from '../GenresDescription';

import { modifyQueryParamInSearch } from '../../utils';

import styles from './movieListItem.css';

const MovieListItem = ({
  genres, releaseDate, title, posterPath, id, location: { search, pathname }, history
}) => {
  const handleSelectMovie = (id) => {
    const newSearch = modifyQueryParamInSearch(search, 'movie', id);

    history.push({
      pathname,
      search: `?${newSearch}`,
    });
  };

  return (
    <div className={styles.MovieListItem} onClick={() => handleSelectMovie(id)}>
      <div
        style={{
          backgroundImage: `url(${posterPath})`,
        }}
        className={styles.MovieListItemContainer}
      >
        <MovieListItemMenu id={id} />
      </div>
      <div className={styles.MovieListItemDetails}>
        <span className={styles.MovieListItemDetailsTitle}>{title}</span>
        <span className={styles.MovieListItemDetailsDate}>
          {releaseDate.slice(0, 4)}
        </span>
      </div>
      <GenresDescription genres={genres} />
    </div>
  );
};

MovieListItem.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })),
  releaseDate: PropTypes.string,
  title: PropTypes.string,
  posterPath: PropTypes.string,
  id: PropTypes.number,
};

export default withRouter(MovieListItem);
