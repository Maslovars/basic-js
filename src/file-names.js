const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
<<<<<<< HEAD:src/st-file-names.js
export default function renameFiles(names) {
  for (let i = 0; i < names.length; i++) {
    let k = 1;
    for (let j = i + 1; j < names.length; j++) {
      if (names[i] === names[j]) {
        names[j] = names[i] + `(${k})`;
        k++;
      }
    }
  }
  return names;
=======
function renameFiles(/* names */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6:src/file-names.js
}

module.exports = {
  renameFiles
};
