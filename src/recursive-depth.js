const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
<<<<<<< HEAD
export default class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    if (arr.find(i => Array.isArray(i)) === undefined) {
      return depth;
    } else {
      let count = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          count.push(arr[i][j])
        }
      }
      depth += this.calculateDepth(count);
      return depth;
    }
=======
class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6
  }
}

module.exports = {
  DepthCalculator
};
