// 10. The following constructor function creates a new Person object with the given name and
// age values.
// a) Create a new person using the constructor function and store it in a variable

class Person {
  constructor() {
    this.name = 'Rachel';
    this.age = '12';
    this.human = true;
  };
}
   function canDrive(person) {
      if (person.age >= 17) {
        return true;
      } 
      else {
        return false;
      }
    }
    
  
  
const person1 = new Person();

// b)  Create a second person using different name and age values and store it in a separate 
// variable
class secondPerson {
  constructor() {
    this.name = 'Jimmy';
    this.age = 30;
    this.human = true;
  };
}
  function canDrive(secondPerson) {
    if (secondPerson.age >= 16){
      return true;
    } 
    else {
      return false;
    }
  }
  
const person2 = new secondPerson();

// c) Print out the properties of each person object to the console
console.log(person1.name);
console.log(person2.name);
console.log(person1.age);
console.log(person2.age);
console.log(person1.human);
console.log(person2.human);
console.log(canDrive(person1));
console.log(canDrive(person2));

// d)  Rewrite the constructor function as a class called PersonClass and use it to create a 
// third person using different name and age values. Print it to the console as well. 

class PersonClass {
  constructor() {
    this.name = 'Mary';
    this.age = '13';
    this.human = true;
  }
}
const person3 = new PersonClass();

console.log(person3.name);
console.log(person3.age);

// e)  Add a canDrive method to both the constructor function and the class that returns true 
// if the person is old enough to drive


