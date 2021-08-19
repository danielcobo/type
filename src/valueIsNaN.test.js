const valueIsNaN = require('./valueIsNaN.js');

test('Test if input is Date object', function () {
  expect(valueIsNaN(NaN)).toStrictEqual(true);
  expect(valueIsNaN(1)).toStrictEqual(false);
  expect(valueIsNaN(1n)).toStrictEqual(false);
  expect(valueIsNaN({})).toStrictEqual(false);
  expect(valueIsNaN([])).toStrictEqual(false);
  expect(valueIsNaN(function () {})).toStrictEqual(false);
  expect(valueIsNaN('')).toStrictEqual(false);
  expect(valueIsNaN('' + 1)).toStrictEqual(false);
  expect(valueIsNaN({} + 1)).toStrictEqual(false);
  expect(valueIsNaN('1')).toStrictEqual(false);
  expect(valueIsNaN(null)).toStrictEqual(false);
  expect(valueIsNaN()).toStrictEqual(false);
  expect(valueIsNaN(undefined)).toStrictEqual(false);
});
