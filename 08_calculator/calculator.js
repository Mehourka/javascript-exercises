const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(arr) {
  return arr.reduce((a,b)=> a+b, 0)
};

const multiply = function(arr) {
  // multiply numbers in a array
  return arr.reduce((a,b)=> a*b, 1)
};

const power = function(x,p) {
	return x**p;
};

const factorial = function(n) {
  	let intArray = [...Array(n).keys()] // Array from 0 to n-1
    intArray = intArray.map(e => e+1) // Array from 1 to n
  return intArray.reduce((a,b)=> a*b,1)
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
