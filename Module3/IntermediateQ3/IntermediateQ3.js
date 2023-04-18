// 3. Use the following animals array for the below tasks. Test each one by printing the result to 
// the console

const animals = ['Tiger', 'Giraffe'] 
console.log(animals)

// a)  Add 2 new values to the end

const moreAnimal = ['Tiger', 'Giraffe']
moreAnimal.push ('Elephant', 'Lion');
console.log(moreAnimal);

// b)  Add 2 new values to the beginning 

const evenMoreAnimal = ['Tiger', 'Giraffe', 'Elephant', 'Lion']
evenMoreAnimal.unshift('Hyena", "Chicken');
console.log(evenMoreAnimal);

// c)  Sort the values alphabetically
const sortAnimals = ['Hyena', 'Chicken', 'Tiger', 'Giraffe', 'Elephant', 'Lion']
sortAnimals.sort();
console.log(sortAnimals);

// d)  Write a function replaceMiddleAnimal(newValue) that replaces the value in the 
// middle of the animals array with newValue

const replaceMiddleAnimal = ['Hyena', 'Chicken', 'Tiger', 'Giraffe', 'Elephant', 'Lion']
replaceMiddleAnimal[2] = "newValue";
console.log(replaceMiddleAnimal);

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array 
// containing all the animals that begin with the beginsWith string. Try to make it work 
// regardless of upper/lower case.

const findMatchingAnimals = ['Hyena', 'Chicken', 'Tiger', 'Giraffe', 'Elephant', 'Lion']

let startsWithG = findMatchingAnimals.filter(function (animal) {
  return animal[0].toLowerCase() === 'g';
});

console.log(startsWithG)