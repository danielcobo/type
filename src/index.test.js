const typeOf = require('./index.js');

test('Test types covered by typeof', function () {
  expect(typeOf('hello string').is('string')).toStrictEqual(true);
  expect(typeOf(1).is('number')).toStrictEqual(true);
  expect(typeOf(0.1).is('number')).toStrictEqual(true);
  expect(typeOf(1n).is('bigint')).toStrictEqual(true);
  expect(typeOf(Symbol('somesymbol')).is('symbol')).toStrictEqual(true);
  expect(typeOf(true).is('boolean')).toStrictEqual(true);
  expect(typeOf(false).is('boolean')).toStrictEqual(true);
  expect(typeOf(function () {}).is('function')).toStrictEqual(true);
  const noDefinition = undefined;
  let noDefinitionEither;
  expect(typeOf(noDefinition).is('undefined')).toStrictEqual(true);
  expect(typeOf(noDefinitionEither).is('undefined')).toStrictEqual(true);
  expect(typeOf().is('undefined')).toStrictEqual(true);
  expect(typeOf(undefined).is('undefined')).toStrictEqual(true);
});

test('Test types NOT covered by typeof', function () {
  expect(typeOf(arguments).is('arguments')).toStrictEqual(true);
  expect(typeOf([]).is('array')).toStrictEqual(true);
  expect(typeOf(new Date()).is('date')).toStrictEqual(true);
  expect(typeOf(NaN).is('NaN')).toStrictEqual(true);
  expect(typeOf(null).is('null')).toStrictEqual(true);
  expect(typeOf(/regex/).is('regex')).toStrictEqual(true);
  expect(typeOf(1).is('integer')).toStrictEqual(true);
  expect(typeOf(0.1).is('float')).toStrictEqual(true);
});

test('Test invalid typeName argument', function () {
  expect(function () {
    typeOf(arguments).is(1);
  }).toThrow();
  expect(function () {
    typeOf(arguments).is('perfection');
  }).toThrow();
});
