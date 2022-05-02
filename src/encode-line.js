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
<<<<<<< HEAD:src/st-encode-line.js
export default function encodeLine(str) {

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
=======
function encodeLine(/* str */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6:src/encode-line.js
}

module.exports = {
  encodeLine
};
