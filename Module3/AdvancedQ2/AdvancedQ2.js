// // 2. The following delayMsg function is intended to be used to delay printing a message until some 
// // time has passed.
// // a) What order will the four tests below print in? Why?
// // Will print from 4-1 as 4 has no delay time, 3 is 0ms, 2 is 20ms and 1 is 100ms

// // b) Rewrite delayMsg as an arrow function
// // c) Add a fifth test which uses a large delay time (greater than 10 seconds) 
// // d) Use clearTimeout to prevent the fifth test from printing at all.

function delayMsg(message, delay) {
 
        setTimeout(() => {
            console.log(message);
        }, delay);
    
    }
    
    delayMsg("#1: Delayed by 100ms", 200);
    delayMsg("#2: Delayed by 20ms", 20);
    delayMsg("#3: Delayed by 0ms", 0);
    delayMsg("#4: Not delayed at all");

myTimeout = setTimeout(delayMsg, 10000, '#5: Delayed by 10 seconds')
clearTimeout(myTimeout);

