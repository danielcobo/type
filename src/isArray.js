/**
 * Returns true/false if input is an array
 * @param {*} val - input value
 * @returns {boolean} true/false input value is an array
 */
const isArray = function isArray(val) {
  if (Array.isArray) {
    return Array.isArray(val);
  } else {
    return Object.prototype.toString.call(val) === '[object Array]';
  }
};

module.exports = isArray;
