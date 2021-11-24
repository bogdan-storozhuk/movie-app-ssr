import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';
import GenresDescription from '../GenresDescription';

import styles from './movieDetails.css';

const MovieDetails = ({
  selectedMovie: {
    posterPath,
    voteAverage,
    genres,
    releaseDate,
    runtime,
    overview,
    title,
    tagline,
  },
}) => (
  <div className={styles.MovieDetails}>
    <div
      style={{
        backgroundImage: `url(${posterPath})`,
      }}
      className={styles.MovieDetailsContainer}
    />
    <div className={styles.MovieDetailsInfo}>
      <Title>
        {title}
        <div className={styles.MovieDetailsCircle}>
          <p className={styles.MovieDetailsScore}>{voteAverage}</p>
        </div>
      </Title>
      <GenresDescription genres={genres} />
      <p className={styles.MovieDetailsInfoTagline}>{tagline}</p>
      <p className={styles.MovieDetailsInfoTimeAndReleaseDate}>
        {releaseDate.slice(0, 4)}
        <span className={styles.MovieDetailsInfoTime}>{runtime} min</span>
      </p>
      <p className={styles.MovieDetailsInfoOverview}>{overview}</p>
    </div>
  </div>
);

MovieDetails.propTypes = {
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
};

export default MovieDetails;
