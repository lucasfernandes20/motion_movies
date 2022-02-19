import { useState, useEffect } from 'react';
import getGenres from '../services/getGenres';

const useFillGenres = () => {
  const [genres, setGenres] = useState([]);

  const fetchGenres = async () => {
    const data = await getGenres();
    setGenres(data);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return { genres };
};

export default useFillGenres;
