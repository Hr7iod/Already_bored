const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date && isFinite(date))) throw "Error";
  let month = date.getMonth();
  switch (true) {
    case month < 2:
      return "winter";
    case month < 5:
      return "spring";
    case month < 8:
      return "summer";
    case month < 11:
      return "fall"
    default:
      return "winter";
  }
};
