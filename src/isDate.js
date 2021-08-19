/**
 * Returns true/false if input is a Date object
 * @param {*} val - input value
 * @returns {boolean} true/false input value is a native Date object
 */
const isDate = function isDate(val) {
  return val instanceof Date;
};

module.exports = isDate;
