/**
 * Returns true/false if input is a Regexp object
 * @param {*} val - input value
 * @returns {boolean} true/false input value is a Regexp object
 */
const isRegex = function isRegex(val) {
  return val instanceof RegExp;
};

module.exports = isRegex;
