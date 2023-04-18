// The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
console.log(phoneBookABC);

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F

const phoneBookDEF = new Map() 
phoneBookABC.set('Darren', '0467854388')
phoneBookABC.set('Erin', '0439977880')
phoneBookABC.set('Florence', '0432569843')
console.log(phoneBookDEF);

// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

// c) Update the phone number for Caroline
phoneBookDEF.set('Caroline', '0455221183', [phoneBookDEF.get('Caroline', '0455221183')]);
console.log(phoneBookDEF.get('Caroline'));

// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map
console.log(phoneBookABC);
console.log(phoneBookDEF);

// e) Combine the contents of the two individual Maps into a single phoneBook Map
// f) Print out the full list of names in the combined phone book


  


  