import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { FilterButton, FilterContainer } from './styles';

function Filter({
  popular, setFilterMovies, genreId, setGenreId,
}) {
  const [genres, setGenres] = useState([]);

  const fetchGenres = async () => {
    try {
      const data = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=a2d7a2a428d0798626c3a3f5f07a21ae&language=pt-Br');
      setGenres(data.data.genres);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  const filterMoviesByGenre = (id) => {
    if (id === 0) {
      setFilterMovies(popular);
      return setGenreId(0);
    }
    const filteredMovies = popular.filter((movie) => movie.genre_ids.includes(id));
    setFilterMovies(filteredMovies);
    return setGenreId(id);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

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
