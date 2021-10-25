import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { TMDB_API } from '../services/apiConfig';
import { MOVIE_REQUESTS } from '../utils/movieRequests';

describe('Axios', () => {
  it('returns data from TMDB API on get', (done) => {
    let mock = new MockAdapter(axios);
    const data = { response: true };

    Object.values(MOVIE_REQUESTS).map((fetchUrl) =>
      mock.onGet(fetchUrl).reply(200, data)
    );

    Object.values(MOVIE_REQUESTS).map((fetchUrl) =>
      axios.get(fetchUrl).then(({ data }) => expect(data.response).toBe(true))
    );

    done();
  });
});

describe('TMDB API', () => {
  it('fetches data from themoviedb', () => {
    expect(TMDB_API.defaults.baseURL).toBe('https://api.themoviedb.org/3');
  });
});
