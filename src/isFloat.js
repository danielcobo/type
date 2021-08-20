const valueIsNaN = require('./valueIsNaN.js');
/**
 * Returns true/false if input is a floating number (aka. includes decimals)
 * @param {*} val - input value
 * @returns {boolean} true/false input value is a floating number
 */
const isFloat = function isFloat(val) {
  return typeof val === 'number' && !Number.isInteger(val) && !valueIsNaN(val);
};

module.exports = isFloat;
