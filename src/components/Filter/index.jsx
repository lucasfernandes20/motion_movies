import PropTypes from 'prop-types';
import React from 'react';
import useFillGenres from '../../hooks/useFillGenres';
import { FilterButton, FilterContainer } from './styles';

function Filter({
  popular, setFilterMovies, genreId, setGenreId,
}) {
  const { genres } = useFillGenres();

  const filterMoviesByGenre = (id) => {
    if (id === 0) {
      setFilterMovies(popular);
      return setGenreId(0);
    }
    const filteredMovies = popular.filter((movie) => movie.genre_ids.includes(id));
    setFilterMovies(filteredMovies);
    return setGenreId(id);
  };

  return (
    <FilterContainer>
      <FilterButton active={genreId === 0} type="button" onClick={() => filterMoviesByGenre(0)}>Todos</FilterButton>
      {
        genres && genres.map((genre) => (
          <FilterButton active={genreId === genre.id} type="button" onClick={() => filterMoviesByGenre(genre.id)}>{genre.name}</FilterButton>
        ))
      }
    </FilterContainer>
  );
}

Filter.propTypes = {
  popular: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilterMovies: PropTypes.func.isRequired,
  setGenreId: PropTypes.func.isRequired,
  genreId: PropTypes.number.isRequired,
};

export default Filter;
