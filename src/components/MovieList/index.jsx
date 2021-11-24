import React from "react";
import PropTypes from "prop-types";

import MovieListItem from "../MovieListItem";

import styles from "./movieList.css";

const MovieList = ({ movies }) => (
  <div className={styles.MovieList}>
    {movies.map(movie => {
      const { id, genres, releaseDate, title, posterPath } = movie;
      return (
        <MovieListItem
          key={id}
          id={id}
          genres={genres}
          releaseDate={releaseDate}
          title={title}
          posterPath={posterPath}
        />
      );
    })}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      budget: PropTypes.number,
      genres: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
      ),
      id: PropTypes.number,
      overview: PropTypes.string,
      posterPath: PropTypes.string,
      releaseDate: PropTypes.string,
      revenue: PropTypes.number,
      runtime: PropTypes.number,
      tagline: PropTypes.string,
      title: PropTypes.string,
      voteAverage: PropTypes.number,
      voteCount: PropTypes.number
    })
  )
};

export default MovieList;
