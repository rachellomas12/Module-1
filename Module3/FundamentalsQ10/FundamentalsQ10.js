// 10. The following constructor function creates a new Person object with the given name and
// age values.
// a) Create a new person using the constructor function and store it in a variable

function Person() { 
    this.name = 'Rachel' 
    this.age = '29'
    this.human = true
}
const person1 = new Person();

// b)  Create a second person using different name and age values and store it in a separate 
// variable
function secondPerson() { 
    this.name = 'Jimmy'; 
    this.age = '30'; 
    this.human = true; 
}
const person2 = new secondPerson();

// c) Print out the properties of each person object to the console
console.log(person1.name);
console.log(person2.name);
console.log(person1.age);
console.log(person2.age);

// d)  Rewrite the constructor function as a class called PersonClass and use it to create a 
// third person using different name and age values. Print it to the console as well. 

function PersonClass() { 
    this.name = 'Mary'; 
    this.age = '31'; 
    this.human = true; 
}
const person3 = new PersonClass();

console.log(person3.name);
console.log(person3.age);

// e)  Add a canDrive method to both the constructor function and the class that returns true 
// if the person is old enough to drive

function canDrive(age) {
    // your code here
    if (age >= 17){
      return false;
    } else {
      return false;
    }
  }

console.log(person1.name);
console.log(person2.name);
console.log(person1.age);
console.log(person2.age);
console.log(person3.name);
console.log(person3.age);
console.log(person1.human);
console.log(person2.human);
console.log(person3.human);