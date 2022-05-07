const fibonacci = function(nMax) {
    let last =1;
    let next = 1;
    let holder = 0;
    if (nMax<0) {
        return "OOPS";
    }
    for(let i=0; i<nMax-2;i++){ // nMax-2 is an adjustment to skip the first two iterations. 
        holder = last+next;
        last = next;
        next = holder;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
