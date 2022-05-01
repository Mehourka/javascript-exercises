const removeFromArray = function(array, remove) {
    let args = Array.from(arguments).slice(1)
    for (let arg of args){
        removeIndex = array.indexOf(arg);
        if (array.includes(arg)) {
            array.splice(removeIndex, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
