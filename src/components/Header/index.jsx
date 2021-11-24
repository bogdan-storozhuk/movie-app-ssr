import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import AddMovieButton from '../AddMovieButton';
import SearchForm from '../SearchForm';
import MovieDetails from '../MovieDetails';
import BackButton from '../BackButton';

import { selectMovie } from '../../reducers/movies/actions';
import { openAddMovieModal } from '../../reducers/modals/actions';
import {
  selectedMovieSelector,
  searchSelector,
} from '../../reducers/movies/selectors';

import styles from './header.css';

const Header = ({
  resetMovie, openAddMovieModal, selectedMovie, search,
}) => {
  return(
  <Fragment>
    <div className={styles.Background} />
    <div className={styles.Header}>
      <div className={styles.HeaderPanel}>
        <Logo />
        {selectedMovie ? (
          <BackButton resetMovie={resetMovie} />
        ) : (
          <AddMovieButton openAddMovieModal={openAddMovieModal} />
        )}
      </div>
      {selectedMovie ? (
        <MovieDetails selectedMovie={selectedMovie} />
      ) : (
        <SearchForm search={search} />
      )}
    </div>
  </Fragment>
)};

const mapStateToProps = createStructuredSelector({
  selectedMovie: selectedMovieSelector,
  search: searchSelector,
});

function mapDispatchToProps(dispatch) {
  return {
    resetMovie: () => dispatch(selectMovie(null)),
    openAddMovieModal: () => dispatch(openAddMovieModal()),
  };
}

Header.propTypes = {
  resetMovie: PropTypes.func,
  openAddMovieModal: PropTypes.func,
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
  search: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
