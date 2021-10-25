/**
 * Takes a number and puts dashes inbetween each 3 for example: 123-456
 * @method generateServiceCode
 * @param {Number} nums
 * @return {String}
 */
const generateServiceCode = (nums) => {
  // thanks General Assembly for the algo homework.
  if (Array.isArray(nums)) {
    return nums.join('').replace(/^(\d{3})(\d{3})$/, `$1-$2`);
  } else {
    return nums.toString().replace(/^(\d{3})(\d{3})$/, `$1-$2`);
  }
};

/**
 * Returns a random integer between min and max
 * @method getRandomInt
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
const getRandomInt = (min, max) => {
  // https://stackoverflow.com/questions/3437133/javascript-generate-a-random-number-that-is-9-numbers-in-length/3437180
  return Math.floor(Math.random() * (max - min)) + min;
}; //The maximum is exclusive and the minimum is inclusive

/**
 * Creates a serviceCode thanks to getRandomInt and generateServiceCode functions.
 * @method getServiceCode
 * @return {String}
 */
export const getServiceCode = () => {
  const num = getRandomInt(100000, 999999);
  const result = generateServiceCode(num);
  return result;
};
