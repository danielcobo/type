/**
 * Returns true/false if input is NaN
 * Note: unline Number.isNaN(), will attempt to
 * coeerce value into a number before checking.
 * @param {*} val - input value
 * @returns {boolean} true/false input value is null
 */
const valueIsNaN = function valueIsNaN(val) {
  return typeof val === 'number' && isNaN(val);
};

module.exports = valueIsNaN;
