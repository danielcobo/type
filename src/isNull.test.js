const isNull = require('./isNull.js');

test('Test for null', function () {
  expect(isNull(null)).toStrictEqual(true);
  expect(isNull('null')).toStrictEqual(false);
  expect(isNull('')).toStrictEqual(false);
  expect(isNull(0)).toStrictEqual(false);
  expect(isNull(false)).toStrictEqual(false);
  expect(isNull(NaN)).toStrictEqual(false);
  expect(isNull({})).toStrictEqual(false);
  expect(isNull(1n)).toStrictEqual(false);
  expect(isNull([])).toStrictEqual(false);
  expect(isNull(function () {})).toStrictEqual(false);
  expect(isNull()).toStrictEqual(false);
  expect(isNull(undefined)).toStrictEqual(false);
});
