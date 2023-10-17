const person = {
    //properties
    name : 'Qun',
    age :22,
    greet() {
        console.log('Hi i am ' + this.name);
     }
}

const array = ['sports', 'cooking'];

// const copiedArry = array.slice();
// console.log(copiedArry);  // Simply copied array 

//New way is use Spread operator

//Spread operator work: They take the array or object after the operator and pull out all the elements or properties. So all the elements of an array or all the properties of an object and put it to whatever is around that spread operator.

// In this case, we got square brackets around the spread operator and therefore all the elements which are pulled out of the existing array are added to the new array.

const copiedArray = [...array];
console.log(copiedArray);  // => [ 'sports', 'cooking' ]



const copiedObject = {...person};
copiedObject.greet();  // => Hi i am Qun
console.log(copiedObject); // =>{ name: 'Qun', age: 22, greet: [Function: greet] }


// Rest operator 

const array1 = (arg1 , arg2 , arg3) => [arg1,arg2,arg3];

console.log(array1(1,2,3));  // => [ 1, 2, 3 ]
console.log(array1(1,2,3,4)); // => [ 1, 2, 3 ]  it's still an array with 3 elements, it doesn't get added because we only work with free arguments.

//In this case we use rest operator 

const array2 = (...args) => args; // this will actually take all the arguments, how many we might specify, that doesn't matter and it will bundle them up in an array for us.
console.log(array2(1,2,3)); // => [ 1, 2, 3 ]
console.log(array2(1,2,3,4)); // => [ 1, 2, 3 , 4 ] 


//Note : So the rest operator looks just like the spread operator, three dots and it's the place where you use it that defines how you call it. 

// Are you using it to pull elements or properties out of arrays or objects? => Then it would be the spread operator.

// Are you using it to merge multiple arguments into an array and you use it in the argument list of a function? => Then it's the rest operator.

