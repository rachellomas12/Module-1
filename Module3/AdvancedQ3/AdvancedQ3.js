// 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed, 
// similar requests until there's a brief pause, then only executing the most recent of those requests. See https://www.techtarget.com/whatis/definition/debouncing
// It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server 
// requests being initiated if a user clicks repeatedly on a button.

// Using the following code to test and start with:
// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and suspends 
// calls to func until there's 1000 milliseconds of inactivity. After this 1 second pause, the most 
// recent call to func should be executed and any others ignored.

function debounce(func) {
  let timeout;
  return function () {
    //clear the timer to cancel the previously queued function call
    clearTimeout(timeout);
    //reset the timer id for this most recent call to happen after the ms delay
    timeout = setTimeout(func, 1000);
  };
}
// b) Extend the debounce decorator function to take a second argument ms, which defines the length 
// of the period of inactivity instead of hardcoding to 1000ms
function debounceB(func, ms) {
  let timeout;
  return function () {
    //clear the timer to cancel the previously queued function call
    clearTimeout(timeout);
    //reset the timer id for this most recent call to happen after the ms delay
    timeout = setTimeout(func, ms);
  };
}
// c) Extend debounce to allow the original debounced function printMe to take an argument msg which 
// is included in the console.log statement.

function printMeC(msg) {
  console.log(`printing debounced message c: ${msg}`);
}
printMeC = debounceC(printMeC, 1200);
setTimeout(printMeC, 100, "Test1");
setTimeout(printMeC, 200, "Test2");
setTimeout(printMeC, 300, "Test3");

function debounceC(func, ms) {
  let timeout;
  return function (msg) {
    //clear the timer to cancel the previously queued function call
    clearTimeout(timeout);
    //reset the timer for this most recent call to happen after the ms delay
    timeout = setTimeout(func, ms, msg);
  };
}