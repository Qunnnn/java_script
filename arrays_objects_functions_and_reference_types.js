// Arrays , Objects and functions are reference types in JS


//Arrays
const array = ['Sports' , 'Cooking' , 'Esports'];

array.push(2);

// console.log(array); => [ 'Sports', 'Cooking', 'Esports', 2 ]

//Explain: The reason for that is that reference types only store an address pointing at the place in memory where that array is stored and that pointer does address has not changed by us adding a new element.So the things stored and as constant is just as Pointer just does address.And this has not changed.  Therefore, our constant value has not changed.The thing it's pointing at has changed, but that totally does not matter here, and this is something you have to understand so that you don't wonder what's going on when we do edit in quotation marks a constant value. We're not really editing the thing that is stored in a constant we're only editing the thing that constant thing is pointing at.

// Objects

var personObj1 = {
    name: 'Qun',
    age: 20
};

var person = personObj1;
person.age = 22;

person = {
    name: 'Test',
    age: 30
};

var personObj2 = person;

// console.log(personObj1);//(1)  => { name: 'Qun', age : 22 }
// console.log(personObj2); //(2) => { name: 'Test', age: 30 }


//Functions

// Impure function
function changeAgeImpure(person) {
    person.age = 25;
    return person;
}

const alex1 = {
    name: 'Alex',
    age: 30
};

const changedAlex = changeAgeImpure(alex1);

// console.log(alex1); // -> { name: 'Alex', age: 25 }
// console.log(changedAlex); // -> { name: 'Alex', age: 25 }
// console.log(alex1 === changedAlex); //  -> true

//Pure function 

function changeAgePure(person) {
    const newPersonObj = JSON.parse(JSON.stringify(person));
    newPersonObj.age = 25;
    return newPersonObj;
}

const alex2 = {
    name: 'Alex',
    age: 30
};

const alexChanged = changeAgePure(alex2);

// console.log(alex2); // -> { name: 'Alex', age: 30 }
// console.log(alexChanged); // -> { name: 'Alex', age: 25 }
// console.log(alex2 === alexChanged); // -> false

//References: 
// https://viblo.asia/p/value-vs-reference-in-javascript-ByEZkW22ZQ0
// https://www.educative.io/courses/step-up-your-js-a-comprehensive-guide-to-intermediate-javascript/value-vs-reference
