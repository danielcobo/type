const otherType = require('./otherType.js');

const types = {
  arguments: require('./isArguments.js'),
  float: require('./isFloat.js'),
  integer: require('./isInteger.js'),
  NaN: require('./valueIsNaN.js'),
  regex: require('./isRegex.js'), //Otherwise would return regexp and who says regexp?
};

/**
 * Returns type name of input value
 * @returns string - type name
 */
const getType = function getType() {
  for (type in types) {
    if (types[type](this.val)) {
      return type;
    }
  }

  return otherType(this.val);
};

/**
 * Returns true/false if input is a certain type
 * @param {string|Array.<string>} typeName
 * @returns {boolean}
 */
const typeIs = function typeIs(typeName) {
  if (typeof typeName === 'string') {
    typeName = [typeName];
  } else if (otherType(typeName) !== 'array') {
    throw new TypeError(
      'Invalid typeName argument. Expected: string|array Received: ' +
        typeof typeName
    );
  }

  //One of expanded types
  for (let i = 0; i < typeName.length; ++i) {
    const name = typeName[i];
    if (types[name]) {
      return true;
    }
  }

  //Other type
  const type = otherType(this.val);
  return typeName.includes(type);
};

/**
 * Throws an error if value is NOT a certain type
 * @param {string|Array.<string>} typeName
 */
const typeMustBe = function typeMustBe(typeName) {
  const type = getType();
  const validType = this.is(typeName);

  if (!validType) {
    throw new TypeError(
      'Expected: ' + typeName.join('|') + ' Received: ' + type
    );
  }
};

/**
 * Throws an error if value is a certain type
 * @param {string|Array.<string>} typeName
 */
const typeMustNotBe = function typeMustNotBe(typeName) {
  const type = getType();
  const validType = this.is(typeName);

  if (validType) {
    throw new TypeError(
      'Expected: ' + typeName.join('|') + ' Received: ' + type
    );
  }
};

const typeOf = function (val) {
  return {
    val: val,
    name: getType,
    is: typeIs,
    mustBe: typeMustBe,
    mustNotBe: typeMustNotBe,
  };
};

module.exports = typeOf;
