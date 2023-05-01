// 7. In JavaScript, the toString method is used to convert an object to a string representation.
// By default, when an object is converted to a String, it returns a string that looks something like 
// [object Object].
// However, we can define our own toString methods for custom objects to provide a more meaningful 
// string representation.

// a) Define a custom toString method for the Person object that will format and print their details
// b) Test your method by creating 2 different people using the below constructor function and printing
// them
// c) Create a new constructor function Student that uses call to inherit from Person and add an extra
//  property cohort
// d) Add a custom toString for Student objects that formats and prints their details. Test with 2 
// students.

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  Person.prototype.toString = function() {
    return `My name is ${this.name}, I am  ${this.age} year old ${this.gender}`;
  }
  
  const object1 = new Person("Teddy", 25, "Male");
  const object2 = new Person("Rachel", 25, "Female");
  
  /** 
   * b) Test your method by creating 2 different people using the below constructor function 
  and printing them
  */
  
  const object3 = new Person("Teddy1", 25, "Male");
  const object4 = new Person("Rachel1", 25, "Female");
  
  console.log('Person 3: ' + object3); //Sub string  
  console.log(`Person 3: ${object3.toString()}`);
  console.log('Person 4: '+ object4);
  
  
  /** 
   * c) Create a new constructor function Student that uses call to inherit from Person and 
  add an extra property cohort
  */
  
  //Releated to Inheritance
  
  
  function Person(name, age, gender) { //Base level constructor 
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort;
  }
  /*
  d) Add a custom toString for Student objects that formats and prints their details. Test 
  with 2 students
  */
  Student.prototype.toString = function() {
    return `My name is ${this.name}, I am  ${this.age} year old ${this.gender}, my cohort is ${this.cohort}`;
  }
  
  const student1 = new Student("Liz", 25, "Female", 'Software Engineer');
  console.log(student1);
  console.log(student1.toString());