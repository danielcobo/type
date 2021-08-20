/**
 * Returns type name of input variable (after value is processed)
 * @param {*} val - input value
 * @returns {string} type name
 */
const getType = function getType(val) {
  if (typeof val === 'undefined') {
    return 'undefined';
  } else if (val === null) {
    return 'null';
  } else {
    return val.constructor.name.toLowerCase();
  }
};

module.exports = getType;
