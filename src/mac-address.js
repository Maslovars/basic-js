const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
<<<<<<< HEAD:src/st-mac-address.js
export default function isMAC48Address(n) {
  const arr = n.split("-");
  let result = true;

  arr.forEach(el => {
    isNaN(parseInt(el, 16)) ? result = false : null;
  });

  return result;
=======
function isMAC48Address(/* n */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6:src/mac-address.js
}
module.exports = {
  isMAC48Address
};
