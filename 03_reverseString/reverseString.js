const reverseString = function(string) {
let stringToArray = string.split("")
let reversedString = stringToArray.reverse().join("")
return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
