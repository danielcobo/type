const isArguments = require('./isArguments.js');

test('Test for native arguments type', function () {
  expect(isArguments(arguments)).toStrictEqual(true);
  expect(isArguments('arguments')).toStrictEqual(false);
  expect(isArguments(true)).toStrictEqual(false);
  expect(isArguments({})).toStrictEqual(false);
  expect(isArguments(1)).toStrictEqual(false);
  expect(isArguments(1n)).toStrictEqual(false);
  expect(isArguments(function () {})).toStrictEqual(false);
  expect(isArguments(null)).toStrictEqual(false);
  expect(isArguments()).toStrictEqual(false);
  expect(isArguments(undefined)).toStrictEqual(false);
});
