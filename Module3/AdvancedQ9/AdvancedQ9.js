// 9. We can delay execution of a function using setTimeout, where we need to provide the callback 
// function to be executed after the delay.
// a) Create a promise-based alternative randomDelay() that delays execution for a random amount of 
// time (between 1 and 20 seconds) and returns a promise we can use via .then(), as in the starter 
// code below

// b) If the random delay is even, consider this a successful delay and resolve the promise, and 
// if the random number is odd, consider this a failure and reject it
// c) Update the testing code to catch rejected promises and print a different message
// d) Try to update the then and catch messages to include the random delay value

function randomDelay() {
  // your code
  let delay = Math.ceil(Math.random() * 20);
  return new Promise((resolve) => setTimeout(resolve, delay * 1000));
}
randomDelay().then((delay) =>
  console.log("There appears to have been a delay.")
);
function randomDelayB() {
  let delay = Math.ceil(Math.random() * 20);
  return new Promise((resolve, reject) =>
    // if even delay the resolve function, if odd delay the reject function
    setTimeout(delay % 2 === 0 ? resolve : reject, delay * 1000)
  );
}
randomDelayB()
  .then(() => console.log("Successful delay"))
  .catch(() => console.log("Failed delay"));
function randomDelayD() {
  let delay = Math.ceil(Math.random() * 20);
  return new Promise((resolve, reject) =>
    setTimeout(delay % 2 === 0 ? resolve : reject, delay * 1000, delay)
  );
}
randomDelayD()
  .then((delay) => console.log("Successful delay of " + delay + " seconds"))
  .catch((delay) => console.log("Failed delay of " + delay + " seconds"));