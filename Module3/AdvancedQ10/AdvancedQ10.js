// 10. Fetch is a browser-based function to send a request and receive a response from a server, 
// which uses promises to handle the asynchronous response. The below fetchURLData uses fetch to 
// check the response for a successful status code, and returns a promise containing the JSON sent 
// by the remote server if successful or an error if it failed. (To run this code in a 
// node.js environment, follow the instructions in the comments before the function.)

// a) Write a new version of this function using async/await
// b) Test both functions with valid and invalid URLs.

//run 'npm init' and accept all the defaults 
//run 'npm install node-fetch' 
//add this line to package.json after line 5: "type": "module", 
// import fetch from 'node-fetch' 
// globalThis.fetch = fetch 

// async function fetchURLData() { 
//     const res = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
//     const json = await res.json();
//     console.log(json.todos);
// }
// async function init() {
//     await fetchURLData();
//     console.log('Finished fetching data');
//     }
//     init();
async function fetchDataFromApi() {
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const json = await res.json();
    console.log(json.joke);
  }
  
  async function init() {
    await fetchDataFromApi();
    console.log('Finished fetching data');
  }
  
  init();