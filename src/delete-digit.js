const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
<<<<<<< HEAD:src/st-delete-digit.js
export default function deleteDigit(n) {
  return String(n).split("").map((item, index, arr) => Number(arr.slice(0, index).join("") + arr.slice(index + 1, arr.length).join(""))).sort((a, b) => b - a)[0]
=======
function deleteDigit(/* n */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6:src/delete-digit.js
}

module.exports = {
  deleteDigit
};
