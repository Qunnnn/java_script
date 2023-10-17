const person = {
    //properties
    name: 'Qun',
    age: 22,
    greet() {
        console.log('Hi i am ' + this.name);
    }
}

const array = ['sports', 'cooking'];


const printName = (personData) => {
    console.log(personData.name);
}

printName(person); // => Qun

//Use this new way 

const printName1 = ({ name }) => {
    console.log(name);
}

printName1(person); // => Qun 

// This way called destructuring , u must pass the param's name equal with the name property in object to get the property as u wanted

// In the same way with Array

const [a, b] = array;

console.log(a, b);
 
//  Unlike the object destructuring here, u can choose any names u want because in Array your elements have no names, they are instead pulled out by position.