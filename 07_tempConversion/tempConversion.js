const convertToCelsius = function (temp) {
  // let convertedC = ((temp - 32) * (5 / 9));

  // if (convertedC % 1 !== 0) { return convertedC.toFixed(1); }
  // else { return convertedC.toFixed(0); }
  return (Math.round(((temp - 32) * (5 / 9)) * 10) / 10);
};

const convertToFahrenheit = function (temp) {
  // let convertedF = ((temp * (9 / 5)) + 32);
  // if (convertedF % 1 !== 0) { return convertedF.toFixed(1); }
  // else { return convertedF.toFixed(0); }

  return (Math.round(((temp * (9 / 5)) + 32) * 10) / 10);
};

console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// .toFixed(1)

