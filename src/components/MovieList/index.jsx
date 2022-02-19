import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pagination } from 'antd';
import Swal from 'sweetalert2';
import MovieCard from '../MovieCard';
import { MovieListContainer, List } from './styles';
import Filter from '../Filter';

function MovieList() {
  const [popular, setPopular] = useState([]);
  const [maxPages, setMaxPages] = useState(0);
  const [filteredMovies, setFilterMovies] = useState();
  const [genreId, setGenreId] = useState(0);
  const [page, setPage] = useState(1);

  const getPopularMovies = async () => {
    try {
      const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a2d7a2a428d0798626c3a3f5f07a21ae&language=pt-BR&page=${page}`);
      setPopular(data.data.results);
      setFilterMovies(data.data.results);
      setMaxPages(data.data.total_pages);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, [page]);

  return (
    <MovieListContainer>
      <Filter
        popular={popular}
        setFilterMovies={setFilterMovies}
        setGenreId={setGenreId}
        genreId={genreId}
      />
      <List
        as={motion.div}
        layout
      >
        <AnimatePresence>
          {

          filteredMovies && filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))
            }
        </AnimatePresence>
      </List>
      <Pagination onChange={(current) => setPage(current)} defaultCurrent={1} total={maxPages} />
    </MovieListContainer>
  );
}

export default MovieList;
