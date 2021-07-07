const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = true;
    if (type == false) this.type = false;
}
encrypt(message, key) {
  if (message === undefined || key === undefined) throw "Error";
  let messageArr = message.toUpperCase().split('');
  let keyUpped = key.toUpperCase();
  let letters = '';
  for (let i = 65; i <= 90; i++) {
      letters += String.fromCodePoint(i);
  }
  let lettersUp = letters.split('');

  while (keyUpped.length < message.length) {
      keyUpped += keyUpped;
  }
  keyUpped = keyUpped.slice(0, message.length).split('');

  let res = [];
  for (let i = 0, j = 0; i < messageArr.length; i++) {
      if (/[A-Z]/.test(messageArr[i])) {
          let MIndex = lettersUp.indexOf(messageArr[i]);
          let KIndex = lettersUp.indexOf(keyUpped[j]);
          let a = MIndex + KIndex;
          let CIndex = a % 26;
          res.push(lettersUp[CIndex]);
          j++;
      }
      else {
          res.push(messageArr[i]);
      }
  }

  if (!this.type) {
      return res.reverse().join("");
  }
  else return res.join("");
}

decrypt(message, key) {
  if (message === undefined || key === undefined) throw "Error";
  let messageArr = message.toUpperCase().split('');
  let keyUpped = key.toUpperCase();
  let letters = '';
  for (let i = 65; i <= 90; i++) {
      letters += String.fromCodePoint(i);
  }
  let lettersUp = letters.split('');

  while (keyUpped.length < message.length) {
      keyUpped += keyUpped;
  }
  keyUpped = keyUpped.slice(0, message.length).split('');

  let res = [];
  for (let i = 0, j = 0; i < messageArr.length; i++) {
      if (/[A-Z]/.test(messageArr[i])) {
          let CIndex = lettersUp.indexOf(messageArr[i]);
          let KIndex = lettersUp.indexOf(keyUpped[j]);
          if (CIndex < KIndex) {
              let MIndex = 26 + (CIndex - KIndex);
              res.push(lettersUp[MIndex]);
          }
          else {
              let MIndex = (CIndex - KIndex) % 26;
              res.push(lettersUp[MIndex]);
          }
          j++;

      }
      else res.push(messageArr[i]);
  }
  if (!this.type) {
      return res.reverse().join("");
  }
  else return res.join("");
}
}

module.exports = VigenereCipheringMachine;
