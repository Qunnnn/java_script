//object
const person = {
   //properties
   name : 'Qun',
   age :22,


   
   // greet: ()=>{
   //  console.log('Hi i am ' + this.name);  using this in arrow function this is set to global not in this scope so name is underfined
   // } 


   //First way
   // greet: function() {
   //    console.log('Hi i am ' + this.name);
   // }


   //Second way 

   greet() {
      console.log('Hi i am ' + this.name);
   }
}

person.greet();
