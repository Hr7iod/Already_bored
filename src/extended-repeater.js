const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = "";
  let additions = "";
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (options.separator === undefined) options.separator = '+';
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;

  if (options.addition !== undefined)
  {
    for (let i = 0; i < options.additionRepeatTimes; i++)
    {
      additions += options.addition + options.additionSeparator;
    }
    additions = additions.substr(0, additions.length - options.additionSeparator.length);
  }

  for (let i = 0; i < options.repeatTimes; i++)
  {
    result += str + additions + options.separator;
  }
  result = result.substr(0, result.length - options.separator.length);

  return result;
};
  