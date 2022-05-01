const sumAll = function(a,b) {
    if(a<0 || b<0 ||  !(typeof a == "number") || !(typeof b == "number")) return "ERROR";

    let max = Math.max(a,b);    
    let min = Math.min(a,b);
    let sum = 0;
    // start from upper number, and decrement in loop, adding that number till lower number
    for(let numberBetween = max; numberBetween>=min; numberBetween--){
        sum += numberBetween;

    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
