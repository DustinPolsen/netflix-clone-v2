import { makeArrayFromString } from '../utils/makeArrayFromString';

describe('makeArrayFromString', () => {
  it('takes a string and makes it an array', () => {
    expect(makeArrayFromString('a cat ate the mouse')).toStrictEqual([
      'a',
      'cat',
      'ate',
      'the',
      'mouse',
    ]);
  });

  expect(
    makeArrayFromString(`4: "English"
5: "Español"`)
  ).toStrictEqual(['4:', '"English"\n5:', '"Español"']);
});
