const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
<<<<<<< HEAD:src/st-sort-by-height.js
export default function sortByHeight(arr) {
  const sortedArr = [];

  arr.forEach(el => {
    if (el !== -1) sortedArr.push(el);
  });

  sortedArr.sort((a, b) => a - b);

  const result = [];
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(arr[i]);
    } else {
      result.push(sortedArr[j]);
      j++;
    }
  }

  return result;
=======
function sortByHeight(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6:src/sort-by-height.js
}

module.exports = {
  sortByHeight
};
