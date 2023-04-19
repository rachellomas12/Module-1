// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.

// function getGreeting(name) { 
//return 'Hello ' + name + '!'; }

let getGreeting = function() {
    return 'Hello ' + name + '!';
};
console.log(getGreeting);

// arrow function
const sameGreeting = (name) => {
    return 'Hello ' + name + '!';
}
console.log(sameGreeting);