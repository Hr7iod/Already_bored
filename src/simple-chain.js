const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    position--;
    if (!Number.isInteger(position) || position < 0 || position >= this.chain.length) {
      this.chain = [];
      throw "Error";
    }
    this.chain.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    result = "";
    this.chain.forEach(item => result += "( " + item + " )~~")
    if (result.length > 2) result = result.substr(0, result.length - 2);
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
