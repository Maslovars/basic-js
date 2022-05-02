const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
<<<<<<< HEAD:src/st-get-email-domain.js
export default function getEmailDomain(email) {
  const separator = email.lastIndexOf("@");
  return email.slice(separator + 1);
=======
function getEmailDomain(/* email */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6:src/get-email-domain.js
}

module.exports = {
  getEmailDomain
};
