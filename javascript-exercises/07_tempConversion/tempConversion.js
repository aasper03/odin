const convertToCelsius = function(x) {
  return Math.round((x - 32) * (5.0 / 9.0) * 10) / 10.0;
};

const convertToFahrenheit = function(x) {
  return Math.round((x * (9.0 / 5.0) + 32) * 10) / 10.0;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
