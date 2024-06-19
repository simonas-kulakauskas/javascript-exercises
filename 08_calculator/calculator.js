const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function () {
  let total = 0;
  for (i = 0; i < arguments[0].length; i++) {
    total += arguments[0][i]
  }
  return total;
};

const multiply = function () {
  let total = arguments[0][0];

  for (i = 1; i < arguments[0].length; i++) {
    total = total * arguments[0][i];
  }

  return total;
};

const power = function (num, power) {
  return Math.pow(num, power);
};

const factorial = function (num) {
  let total = 1;

  for (i = num; i > 0; i--) {
    total = total * i
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
