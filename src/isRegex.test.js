const isRegex = require('./isRegex.js');

test('Test for regex', function () {
  expect(isRegex(/hello regex/)).toStrictEqual(true);
  expect(isRegex('/hello regex/')).toStrictEqual(false);
  expect(isRegex({})).toStrictEqual(false);
  expect(isRegex(1)).toStrictEqual(false);
  expect(isRegex(1n)).toStrictEqual(false);
  expect(isRegex([])).toStrictEqual(false);
  expect(isRegex(function () {})).toStrictEqual(false);
});
