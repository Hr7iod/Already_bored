const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let firstLetters = [];
  members.forEach(member => {
    if (typeof member === "string" && member.length > 0) firstLetters.push(member.trim().charAt(0).toUpperCase());
  });
  return firstLetters.sort().join('');
};
