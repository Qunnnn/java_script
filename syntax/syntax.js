const fullName = 'Văn Quân'; //inchangeable
let age = 22;  //changeable 
const hasHobbies = true; //inchangeable

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'My name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}

console.log(summarizeUser(fullName, age, hasHobbies));