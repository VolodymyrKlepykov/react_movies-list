import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <>
    {movies.map(movie => (
      <div className="card" key={movies.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    imdbId: PropTypes.string.isRequired,
  })),
};

MoviesList.defaultProps = {
  movies: [],
};