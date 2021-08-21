const typeOf = require('./index.js');

describe('Types covered by typeof', () => {
  test('Test bigint', function () {
    expect(typeOf(1n)).toStrictEqual('bigint');
  });

  test('Test boolean', function () {
    expect(typeOf(true)).toStrictEqual('boolean');
    expect(typeOf(false)).toStrictEqual('boolean');
  });

  test('Test function', function () {
    expect(typeOf(function () {})).toStrictEqual('function');
  });

  test('Test number', function () {
    expect(typeOf(1)).toStrictEqual('number');
    expect(typeOf(0.1)).toStrictEqual('number');
  });

  test('Test string', function () {
    expect(typeOf('hello string')).toStrictEqual('string');
  });

  test('Test undefined', function () {
    const noDefinition = undefined;
    let noDefinitionEither;
    expect(typeOf(noDefinition)).toStrictEqual('undefined');
    expect(typeOf(noDefinitionEither)).toStrictEqual('undefined');
    expect(typeOf()).toStrictEqual('undefined');
    expect(typeOf(undefined)).toStrictEqual('undefined');
  });

  test('Test symbol', function () {
    expect(typeOf(Symbol('foo'))).toStrictEqual('symbol');
  });
});

describe('Types NOT covered by typeof', () => {
  test('Test arguments', function () {
    expect(typeOf(arguments)).toStrictEqual('arguments');
  });

  test('Test array', function () {
    expect(typeOf([])).toStrictEqual('array');
  });

  test('Test buffer', function () {
    expect(typeOf(Buffer.alloc(43))).toStrictEqual('buffer');
  });

  test('Test date', function () {
    expect(typeOf(new Date())).toStrictEqual('date');
  });

  test('Test NaN', function () {
    expect(typeOf(NaN)).toStrictEqual('NaN');
  });

  test('Test null', function () {
    expect(typeOf(null)).toStrictEqual('null');
  });

  test('Test regex', function () {
    expect(typeOf(/regex/)).toStrictEqual('regex');
  });
});

describe('Custom types', () => {
  test('Test custom class', function () {
    class Robot {
      constructor(name, side) {
        this.name = name;
        this.side = side;
      }
    }
    const metroplex = new Robot('Metroplex', 'autobot');
    expect(typeOf(metroplex)).toStrictEqual('robot');
  });
});
