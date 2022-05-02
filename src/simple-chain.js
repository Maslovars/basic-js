const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
<<<<<<< HEAD
export default {

  chain: [],

=======
const chainMaker = {
>>>>>>> 35961c4664a5f9ed985ef60ff6b2afabe9e9afc6
  getLength() {
    return this.chain.length;
  },
  addLink(value) {

    if (typeof (value) === "undefined") {
      this.chain.push(`(  )`);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1] === undefined) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const finish = this.chain.join('~~');
    this.chain = [];
    return finish;
  }
};

module.exports = {
  chainMaker
};
