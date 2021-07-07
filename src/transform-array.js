const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw "Error";
  let resultArr = [];
  for (let i = 0; i < arr.length; i++)
  {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        if (typeof arr[i + 1] === "string" && arr[i + 1].slice(-5) === "-prev") i++;
        break;
      case '--discard-prev':
        if (resultArr.length > 0 && i > 0) resultArr.splice(resultArr.length - 1, 1);
        break;
      case '--double-next':
        if (i + 1 < arr.length) resultArr.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (i - 1 > 0) resultArr.push(arr[i - 1]);
        break;
      default:
        resultArr.push(arr[i]);
        break;
    }
  };
  return resultArr;
};
