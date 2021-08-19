const type = {
  arguments: require('./isArguments.js'),
  array: require('./isArray.js'),
  date: require('./isDate.js'),
  NaN: require('./valueIsNaN.js'),
  null: require('./isNull'),
  regex: require('./isRegex.js'),
};

/**
 * Same as typeof but returns:
- 'regex' for regular rexpression
- 'array' for array 
- 'null' for null, 
- 'NaN' for NaN and
- 'arguments' for arguments, the native JS object
 * @param {string} val 
 * @returns {string} input type
 */
const valType = function valType(val) {
  for (match in type) {
    if (type[match](val)) {
      return match;
    }
  }
  return typeof val;
};

valType.isFloat = require('./isFloat.js');
valType.isInteger = require('./isInteger.js');

module.exports = valType;
