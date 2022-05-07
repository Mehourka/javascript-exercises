function isLetter(l){
    code = l.charCodeAt();
    return code>= 65 && code <= 122;
}

const palindromes = function (string) {
    let array = string
                    .toLowerCase() 
                    .split("") // turn string to array
                    .filter(isLetter); // get only letters

    for (let i=0; i< array.length/2; i++){
        if(array[i] !== array[array.length -i-1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
