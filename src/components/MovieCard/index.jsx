import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import { CardContainer, MoviePoster } from './styles';

function MovieCard({ movie }) {
  console.log(movie);
  return (
    <CardContainer
      data-hover={movie.overview}
      as={motion.div}
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <MoviePoster src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
    </CardContainer>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
