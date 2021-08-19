const isInteger = require('./isInteger.js');

test('Test for integer number', function () {
  expect(isInteger(1)).toStrictEqual(true);
  expect(isInteger(0.1)).toStrictEqual(false);
  expect(isInteger(1n)).toStrictEqual(false);
  expect(isInteger('1')).toStrictEqual(false);
  expect(isInteger(1 / 10)).toStrictEqual(false);
  expect(isInteger(0.1 * 10)).toStrictEqual(true);
  expect(isInteger({})).toStrictEqual(false);
  expect(isInteger([])).toStrictEqual(false);
  expect(isInteger(function () {})).toStrictEqual(false);
});
