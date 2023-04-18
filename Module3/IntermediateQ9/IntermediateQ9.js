// 9. Given the below salaries object, perform the following tasks.
// a)  Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

function sumSalaries(salaries) {
    const ourArray = [35000, 25000, 55000, 75000, 43000];
    let sum = 0;
  
    for (let i = 0; i < ourArray.length; i += 1) {
      sum += ourArray[i];
    }
    
    return sum;
  }
  
  console.log(sumSalaries([35000, 25000, 55000, 75000, 43000]));

// b)  Write a function topEarner(salaries) that calculates and returns the name of the person 
// earning the highest salary
 
// number array
let salaries = { 
    "Timothy" : 35000, 
    "David" : 25000, 
    "Mary" : 55000, 
    "Christina" : 75000, 
    "James" : 43000 
}; 

