const isArray = require('./isArray.js');

test('Test if input is array', function () {
  expect(isArray([])).toStrictEqual(true);
  expect(isArray({ length: 1 })).toStrictEqual(false);
  expect(isArray(true)).toStrictEqual(false);
  expect(isArray({})).toStrictEqual(false);
  expect(isArray(1)).toStrictEqual(false);
  expect(isArray(1n)).toStrictEqual(false);
  expect(isArray(function () {})).toStrictEqual(false);
  expect(isArray(null)).toStrictEqual(false);
  expect(isArray()).toStrictEqual(false);
  expect(isArray(undefined)).toStrictEqual(false);
});
