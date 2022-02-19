import axios from 'axios';
import Swal from 'sweetalert2';

const getGenres = async () => {
  try {
    const data = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=a2d7a2a428d0798626c3a3f5f07a21ae&language=pt-Br');

    return data.data.genres;
  } catch (err) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo deu errado durante a requisição de generos, tente novamente mais tarde!',
    });
  }
};

export default getGenres;
