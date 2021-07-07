const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0
  matrix.forEach(item => item.forEach(item => {
    if (item === "^^") cats++
  }))
  return cats;
};
