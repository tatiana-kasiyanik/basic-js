const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {

  chains: [],

  getLength() {
    return this.chains.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.chains.push('( )');
      return this;
    }
    this.chains.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || !(position <= this.chains.length && position >= 1)) {
      this.chains = [];
      throw new Error("You can't remove incorrect link!");
    }
    let partLeft = this.chains.slice(0, position - 1);
    let partRight = this.chains.slice(position);
    this.chains = partLeft.concat(partRight);
    return this;
  },

  reverseChain() {
    this.chains.reverse();
    return this;
  },

  finishChain() {
    let result = this.chains.join('~~');
    this.chains = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
