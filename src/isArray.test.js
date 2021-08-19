const isArray = require('./isArray.js');

test('Test if input is array', function () {
  expect(isArray([])).toStrictEqual(true);
  expect(isArray({ length: 1 })).toStrictEqual(false);
  expect(isArray(true)).toStrictEqual(false);
});
