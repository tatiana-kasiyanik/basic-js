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
function getEmailDomain(email) {
  let arr = [];
  for (let i = email.length - 1; i >= 0; i--) {
    if (email[i] !== '@') {
      arr.push(email[i]);
    } else {
      break;
    }
  }
  return arr.reverse().join('');


  // let parts = email.split('@');
  // return parts[parts.length - 1];

}

module.exports = {
  getEmailDomain
};
