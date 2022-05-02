const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
<<<<<<< HEAD:src/st-matrix-elements-sum.js
export default function getMatrixElementsSum(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0 && typeof matrix[i + 1] !== "undefined") matrix[i + 1][j] = 0;
    }
  }

  return matrix.flat().reduce((a, b) => a + b);

=======
function getMatrixElementsSum(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6:src/matrix-elements-sum.js
}

module.exports = {
  getMatrixElementsSum
};
