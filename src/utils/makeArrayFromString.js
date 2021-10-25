/**
 * @method makeArrayFromString
 * @param {String} str
 * @param {String} matchType
 * @return {Array} takes a string and returns an array.
 */
export const makeArrayFromString = (str, matchType) => {
  return Array.from(str.split(' ')).map((w) => {
    return matchType === 'matchOnlyLetters'
      ? w.replace(/[0-9]|:|"|\n/g, '')
      : w;
    // had to do regex this way instead of [^a-zA-Z ] due to non-english languages
  }); // match only letters
};
