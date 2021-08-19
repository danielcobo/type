const isFloat = require('./isFloat.js');

test('Test for float number', function () {
  expect(isFloat(0.1)).toStrictEqual(true);
  expect(isFloat(1)).toStrictEqual(false);
  expect(isFloat(1n)).toStrictEqual(false);
  expect(isFloat('0.1')).toStrictEqual(false);
  expect(isFloat(1 / 10)).toStrictEqual(true);
  expect(isFloat({})).toStrictEqual(false);
  expect(isFloat([])).toStrictEqual(false);
  expect(isFloat(function () {})).toStrictEqual(false);
});
