// The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F

const phoneBookDEF = new Map()
phoneBookABC.set('Darren', '0467854388'),
phoneBookABC.set('Erin', '0439977880'),
phoneBookABC.set('Florence', '0432569843')
console.log(phoneBookDEF)


// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
const phoneBookDEFArray = new Map ([['Darren', '0467854388'],
['Erin', '0439977880'],
['Florence', '0432569843']])

// c) Update the phone number for Caroline
phoneBookABC.set('Caroline', '0426845697')

// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map
function printPhoneBook(contacts){
    contacts.forEach((value, key) =>{
        console.log(key + ':' + value)
    })
}

// e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// f) Print out the full list of names in the combined phone book
console.log(phoneBook)


  


  