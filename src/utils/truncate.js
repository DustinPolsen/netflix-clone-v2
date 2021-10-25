/**
 * @method truncate
 * @param {String} str
 * @param {Number} n
 * @return {string}
 */
export const truncate = (str, n) => {
  if (typeof str === 'string') {
    return str?.length > n ? `${str?.substr(0, n - 1)} ...` : str ?? '';
  }
  // truncate string when it's length is greater than the n arguement
};
