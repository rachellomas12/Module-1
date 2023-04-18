// 9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
let dog1 = 'Bingo'; 
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
console.log(teamSports, dog1, cat1);

let moreSports = ['Hockey', 'Cricket', 'Volleyball']; 
moreSports.push('Soccor', 'Tennis');
moreSports.unshift('Netball');
console.log(moreSports);

// b)  Create a new dog2 variable equal to dog1 and give it a new value
let dog2 = 'Samson';

// c) Create a new cat2 variable equal to cat1 and change its name property 
let cat2 = { name: 'Harry', breed: 'Siberian' };

// d)  Print the original teamSports, dog1 and cat1 variables to the console. Have they 
// changed? Why? 
// No- Didn't officilly change it

// e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent
