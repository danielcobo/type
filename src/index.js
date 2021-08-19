const genericTypes = [
  'bigint',
  'boolean',
  'function',
  'number',
  'object',
  'string',
  'symbol',
  'undefined',
];

const types = {
  arguments: require('./isArguments.js'),
  array: require('./isArray.js'),
  date: require('./isDate.js'),
  float: require('./isFloat.js'),
  integer: require('./isInteger.js'),
  NaN: require('./valueIsNaN.js'),
  null: require('./isNull'),
  regex: require('./isRegex.js'),
};

const type = function (val) {
  return {
    val: val,
    is: function (typeName) {
      if (typeof typeName !== 'string') {
        throw new Error(
          'Invalid typeName argument. Expected: string Received: ' +
            typeof typeName
        );
      }
      if (genericTypes.includes(typeName)) {
        return typeof this.val === typeName;
      } else if (types[typeName]) {
        return types[typeName](this.val);
      } else {
        throw new Error(
          'Invalid typeName argument.' + typeName + ' is an unknown type name.'
        );
      }
    },
  };
};

module.exports = type;
