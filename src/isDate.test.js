const isDate = require('./isDate.js');

test('Test if input is Date object', function () {
  expect(isDate(new Date())).toStrictEqual(true);
  expect(isDate({})).toStrictEqual(false);
  expect(isDate('Date')).toStrictEqual(false);
});
