const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
<<<<<<< HEAD:src/st-dns-stats.js
export default function getDNSStats(domains) {
  const result = {};

  for (let i = 0; i < domains.length; i++) {
    const arr = domains[i].split(".").reverse();
    let str = "";

    for (let j = 0; j < arr.length; j++) {
      str += `.${arr[j]}`;
      if (result[str] === undefined) {
        result[str] = 1;
      } else {
        result[str] += 1;
      }
    }
  }
  return result;
=======
function getDNSStats(/* domains */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6:src/dns-stats.js
}

module.exports = {
  getDNSStats
};
