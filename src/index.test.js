const type = require('./index.js');

test('Test types covered by typeof', function () {
  expect(type('hello string')).toStrictEqual('string');
  expect(type(1)).toStrictEqual('number');
  expect(type(0.1)).toStrictEqual('number');
  expect(type(1n)).toStrictEqual('bigint');
  expect(type(Symbol('somesymbol'))).toStrictEqual('symbol');
  expect(type(true)).toStrictEqual('boolean');
  expect(type(false)).toStrictEqual('boolean');
  expect(type(function () {})).toStrictEqual('function');
  const noDefinition = undefined;
  let noDefinitionEither;
  expect(type(noDefinition)).toStrictEqual('undefined');
  expect(type(noDefinitionEither)).toStrictEqual('undefined');
  expect(type()).toStrictEqual('undefined');
  expect(type(undefined)).toStrictEqual('undefined');
});

test('Test types NOT covered by typeof', function () {
  expect(type(arguments)).toStrictEqual('arguments');
  expect(type([])).toStrictEqual('array');
  expect(type(new Date())).toStrictEqual('date');
  expect(type(NaN)).toStrictEqual('NaN');
  expect(type(null)).toStrictEqual('null');
  expect(type(/regex/)).toStrictEqual('regex');
  expect(type.isFloat(0.1)).toStrictEqual(true);
  expect(type.isInteger(1)).toStrictEqual(true);
});
