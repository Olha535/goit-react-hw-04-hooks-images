import axios from 'axios';
import { BASE_URL, API_KEY } from '../services/constants';

async function fetchImages(searchQuery, page) {
  const url = `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios
    .get(url)
    .then(response => response.data.hits)
    .then(hits =>
      hits.map(({ id, largeImageURL, webformatURL }) => ({
        id,
        webformatURL,
        largeImageURL,
      })),
    );
}

// function fetchImages(searchQuery, page) {
//   const url = `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
//   return fetch(url)
//     .then(response => response.json())
//     .then(({ hits }) => {
//       console.log('hits', hits);
//       return hits;
//     });
// }

export default fetchImages;
