// const findTheOldest = function(array) {
    
//     let sorted = array.sort((a,b)=>{
//         return getAge(b) - getAge(a); // Sort according to age (oldest to youngest)
//     })   
//     return sorted[0]; // Return first sorted element (oldest)
// };


const findTheOldest = function(array) {
    let oldest = array.reduce((oldest, person)=>{
        return (getAge(oldest) > getAge(person) ? oldest : person)
    })
    return oldest;
};

function getAge(personObj){
    const currentYear = new Date().getFullYear();
    const birthYear = personObj["yearOfBirth"];
    const oldestYear = (personObj["yearOfDeath"] || currentYear)   ;
    return oldestYear - birthYear;    
}

// Do not edit below this line
module.exports = findTheOldest;
