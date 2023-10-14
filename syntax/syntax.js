var fullName = 'Văn Quân';
var age = 22;
var hasHobbies = true;

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