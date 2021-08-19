const isDate = require('./isDate.js');

test('Test if input is Date object', function () {
  expect(isDate(new Date())).toStrictEqual(true);
  expect(isDate({})).toStrictEqual(false);
  expect(isDate('Date')).toStrictEqual(false);
  expect(isDate(1)).toStrictEqual(false);
  expect(isDate(1n)).toStrictEqual(false);
  expect(isDate([])).toStrictEqual(false);
  expect(isDate(function () {})).toStrictEqual(false);
  expect(isDate(null)).toStrictEqual(false);
  expect(isDate()).toStrictEqual(false);
  expect(isDate(undefined)).toStrictEqual(false);
});
