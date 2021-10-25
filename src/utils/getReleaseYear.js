/**
 * takes the movie object and returns i'ts release year, removes the dashes, month and day from the day..
 * @method getReleaseYear
 * @param {Object} movie
 * @return {String}
 */
export const getReleaseYear = (movie) => {
  if (movie === undefined) return;

  return (
    movie?.first_air_date?.match(/\d{4}/) || movie?.release_date?.match(/\d{4}/)
  );
};
