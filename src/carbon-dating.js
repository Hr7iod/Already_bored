const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  result = Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
  if (isNaN(result) || result <= 0 || !isFinite(result)) return false;
  return result;
};
