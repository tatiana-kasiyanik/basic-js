const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.toUTCString();
  } catch {
    throw Error('Invalid date!');
  }
  if (Object.prototype.toString.call(date) !== "[object Date]" || isNaN(date)) {
    throw Error('Invalid date!');
  }
  if (1 < date.getMonth() && date.getMonth() < 5) {
    return 'spring';
  } else if (4 < date.getMonth() && date.getMonth() < 8) {
    return 'summer';
  } else if (7 < date.getMonth() && date.getMonth() < 11) {
    return 'fall';
  } else {
    return 'winter';
  }
}

module.exports = {
  getSeason
};
