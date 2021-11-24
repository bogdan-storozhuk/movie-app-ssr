import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { modifyQueryParamInSearch } from '../../utils';

import styles from './genreItem.css';

const GenreItem = ({
  genre, getSelectedGenre, location: { search, pathname }, history,
}) => {
  const setGenre = (name) => {
    const newSearch = modifyQueryParamInSearch(search, 'genre', name);
    history.push({
      pathname: `${pathname}`,
      search: `?${newSearch}`,
    });
  };
  return (
    <li onClick={() => setGenre(genre.name)} className={styles.genreItem}>
      <span className={`${styles.genreItemMessage} ${getSelectedGenre(genre.name)}`}>
        {genre.name}
      </span>
    </li>
  );
};

GenreItem.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  getSelectedGenre: PropTypes.func,
};

export default withRouter(GenreItem);
