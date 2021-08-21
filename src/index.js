/**
 * Returns type name of input value
 * @param {*} val
 * @returns {string} - type name
 */
module.exports = function typeOf(val) {
  const genericType = typeof val;
  if (genericType === 'undefined') {
    return 'undefined';
  } else if (val === null) {
    return 'null';
  } else if (genericType === 'number' && isNaN(val)) {
    return 'NaN';
  } else if (Object.prototype.toString.call(val) === '[object Arguments]') {
    return 'arguments';
  } else {
    const type = val.constructor.name.toLowerCase();
    if (type === 'regexp') {
      return 'regex';
    } else {
      return type;
    }
  }
};
