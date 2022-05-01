const leapYears = function(year) {
    let leap = false;

    return (year%4 == 0 && (year%100 !=0 || year%400 == 0))
};

// Do not edit below this line
module.exports = leapYears;
