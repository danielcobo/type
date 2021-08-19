/**
 * Returns true/false if input is an integer (aka. whole number)
 * @param {*} val - input value
 * @returns {boolean} true/false input value is an integer
 */
const isInteger = function isInteger(val) {
  return Number.isInteger(val);
};

module.exports = isInteger;
