const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  if (typeof sampleActivity !== "string") return false;

  const number = parseFloat(sampleActivity);
  const checkNaN = number === number;

  if (checkNaN === false) return false;

  if (number < 1 || number === 15.1 || number > 8999) return false;


  const formula = 0.693 / HALF_LIFE_PERIOD;
  const time = (Math.log(MODERN_ACTIVITY / number)) / formula;
  const result = Math.ceil(time);
  return result;

}

module.exports = {
  dateSample
};
