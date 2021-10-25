const idMaker = () => () => Math.ceil(Math.random() * 100);

const generateId = idMaker();

const makeid = (length) => {
  //stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  let result = '';
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const toKebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');

export const getRandomId = (length) =>
  toKebabCase(makeid(length)) + generateId();
