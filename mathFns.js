function Calculator() {}

Calculator.prototype = {
  constructor: Calculator,
  /**
   * Checks that both arguments passed to any Calculator method are numbers
   * @param {*} x 
   * @param {*} y 
   * @returns boolean
   */
  argsInvalid: function(x, y) {
    return (isNaN(x) || isNaN(y));
  },
  checkArgs: function(x, y) {
    if (this.argsInvalid(x, y)) {
      throw new Error('Arguments must be numbers');
    }
  },
  ctDecimals: function(x, y) {
    let maxDecimals = 0;
    let myDecimals;
    [x, y].forEach(function(num) {
      if (Math.floor(num.valueOf()) === num.valueOf()) {
        myDecimals = 0;
      } else {
        myDecimals = num.toString().split('.')[1].length || 0;
      }
      if (myDecimals > maxDecimals) {
        maxDecimals = myDecimals;
      }
    })
    return maxDecimals;
  },
  /**
   * Takes two numbers and an operator and returns the result - uses the greatest number of decimal places
   * in the arguments to determine how many decimals to use in the returned result
   * @param {number} x 
   * @param {number} y 
   * @param {string} operator 
   * @returns number
   */
  operate: function(x, y, operator) {
    let operation;
    let decimalPlaces = this.ctDecimals(x, y);
    switch (operator) {
      case '+':
        operation = function(x, y) {
          return x + y;
        }
        break;
      case '-':
        operation = function(x, y) {
          return x - y;
        }
        break;
      case '/':
        operation = function(x, y) {
          return x / y;
        }
        break;
      case '*':
        operation = function(x, y) {
          return x * y;
        }
        break;
    }
    return Math.round(operation(x, y) * 10000) / 10000;
  },
  /**
   * Returns the sum of the two numbers passed
   * @param {*} x 
   * @param {*} y 
   * @returns number
   */
  add: function(x, y) {
    this.checkArgs(x, y);
    let result = this.operate(x, y, '+');
    return result;
  },
  /**
   * Returns the difference of the two numbers passed
   * @param {*} x 
   * @param {*} y 
   * @returns number
   */
  subtract: function(x, y) {
    this.checkArgs(x, y);
    let result = this.operate(x, y, '-');
    return result;
  },
  /**
   * Returns the quotient of the two numbers passed
   * @param {*} x 
   * @param {*} y 
   * @returns number
   */
  divide: function(x, y) {
    this.checkArgs(x, y);
    let result = this.operate(x, y, '/');
    return result;
  },
  /**
   * Returns the product of the two numbers passed
   * @param {*} x 
   * @param {*} y 
   * @returns number
   */
  multiply: function(x, y) {
    this.checkArgs(x, y);
    let result = this.operate(x, y, '*');
    return result;
  }
}

module.exports = {
  Calculator,
}