const repeatString = function(string, nTimes) {
// Loop n times and add
let longString = ""
if(nTimes<0) {
    return "ERROR"
}
for(let i = 0; i<nTimes; i++){
    longString += string
}
return longString
};

// Do not edit below this line
module.exports = repeatString;
