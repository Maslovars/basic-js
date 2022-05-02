const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
<<<<<<< HEAD
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--double-next":
        if (i < arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;

      case "--discard-prev":
        if (arr[i - 2] !== "--discard-next") {
          result.pop();
        }
        break;

      case "--discard-next":
        i++;
        break;

      case "--double-prev":
        if (i > 1 && arr[i - 2] !== "--discard-next") {
          result.push(arr[i - 1]);
        }
        break;

      default:
        result.push(arr[i]);
    };
  };

  return result;

=======
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6
}

module.exports = {
  transform
};
