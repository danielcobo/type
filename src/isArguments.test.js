const isArguments = require('./isArguments.js');

test('Test for native arguments type', function () {
  expect(isArguments(arguments)).toStrictEqual(true);
  expect(isArguments('arguments')).toStrictEqual(false);
  expect(isArguments(true)).toStrictEqual(false);
});
