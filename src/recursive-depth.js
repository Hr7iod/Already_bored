const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let maxDepth = 0;
    for (let subArr of arr) {
      if (Array.isArray(subArr)) {
        maxDepth = Math.max(this.calculateDepth(subArr), maxDepth)
      }
    }
    return depth + maxDepth;
  }
};