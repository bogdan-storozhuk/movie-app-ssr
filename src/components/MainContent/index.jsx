import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import MovieList from '../MovieList';
import ControlPanel from '../ControlPanel';
import MovieCount from '../MovieCount';
import ErrorBoundry from '../ErrorBoundry';

import WithLoading from '../../hoc/withLoading';
import { useQuery } from '../../hooks/index';

import {
  moviesSelector,
  loadingSelector,
  errorSelector,
  genreSelector,
  searchSelector,
  sortBySelector,
  selectedMovieSelector,
} from '../../reducers/movies/selectors';
import {
  fetchMoviesStart,
  submitSearch,
  setGenre,
  selectSortBy,
  selectMovie,
} from '../../reducers/movies/actions';

import styles from './mainContent.css';

const MovieListWithLoading = WithLoading(MovieList);

class MainContent extends Component {
  componentWillMount() {
    if (this.props.movies.length > 0) {
      return;
    }
    this.fetchMovies();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location === this.props.location || prevProps.match === this.props.match) {
      return;
    }
    this.fetchMovies();
  }

  fetchMovies = () => {
    const { location, match } = this.props;
    const { search: searchQueries } = location;
    const { params: { searchQuery } } = match;
    const query = new URLSearchParams(searchQueries);
    const genreParam = query.get('genre');
    const sortByParam = query.get('sortBy');
    const movieByParam = parseInt(query.get('movie'));
    if (movieByParam) {
      this.props.selectMovie(movieByParam);
    }
    this.props.fetchMoviesStart({ genre: genreParam, search: searchQuery, sortBy: sortByParam });
  }

  render() {
    const { movies, loading } = this.props;
    return (
      <div className={styles.MainContent}>
        <ControlPanel />
        <MovieCount count={movies.length} />
        <ErrorBoundry>
          <MovieListWithLoading loading={loading} movies={movies} />
        </ErrorBoundry>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  movies: moviesSelector,
  loading: loadingSelector,
  error: errorSelector,
  genre: genreSelector,
  search: searchSelector,
  sortBy: sortBySelector,
  selectedMovie: selectedMovieSelector,
});

function mapDispatchToProps(dispatch) {
  return {
    fetchMoviesStart: genre => dispatch(fetchMoviesStart(genre)),
    submitSearch: search => dispatch(submitSearch(search)),
    setGenre: genre => dispatch(setGenre(genre)),
    selectSortBy: sortBy => dispatch(selectSortBy(sortBy)),
    selectMovie: id => dispatch(selectMovie(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainContent));

