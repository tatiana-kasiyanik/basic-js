const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') {
    str = String(str);
  }
  let result = '';
  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    result += str;
    if (options.addition !== undefined) {
      for (let j = 0; j < (options.additionRepeatTimes || 1); j++) {
        if (j === (options.additionRepeatTimes || 1) - 1) {
          result += options.addition;
        } else {
          result += options.addition + (options.additionSeparator || '|');
        }
      }
    }
    if (i !== (options.repeatTimes || 1) - 1) {
      result += (options.separator || '+');
    }
  }
  return result;
}

module.exports = {
  repeater
};
