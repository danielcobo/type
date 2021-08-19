/**
 * Returns true/false if input is arguments (See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
 * @param {*} val - input value
 * @returns {boolean} true/false input value is the native JS `arguments` object
 */
const isArguments = function isArguments(val) {
  return Object.prototype.toString.call(val) === '[object Arguments]';
};

module.exports = isArguments;
