const fullName = 'Văn Quân'; //inchangeable
let age = 22;  //changeable 
const hasHobbies = true; //inchangeable



// const summarizeUser =
//     function (userName, userAge, userHasHobby) {
//         return (
//             'My name is ' +
//             userName +
//             ', age is ' +
//             userAge +
//             ' and the user has hobbies: ' +
//             userHasHobby
//         );
//     }

// arrow_function 
const summarizeUser = (userName, userAge, userHasHobby) => 'My name is ' + userName + ', age is ' + userAge + ', and the user has hobbies: ' + userHasHobby;
console.log(summarizeUser(fullName, age, hasHobbies));

const addNum = (a ,b) => a + b; 
console.log(addNum(1,2));

const addOne = a => ++a;
console.log(addOne(2));

