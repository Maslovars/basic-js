const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  const result = [];
  const arr = str.split("");
  let num = 1;
  arr.forEach((el, index) => {
    if (el === arr[index + 1]) {
      num++;
    } else {
      result.push(num);
      result.push(el);
      num = 1;
    }
  });

  result.forEach((el, index) => {
    if (el === 1) {
      result.splice(index, 1);
    }
  });
  return result.join("");
}

module.exports = {
  encodeLine
};
