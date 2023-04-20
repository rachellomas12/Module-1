// 9. Given the below salaries object, perform the following tasks.
// a)  Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

function sumSalaries(salaries) {
    let sum = 0;
  
    for (let i = 0; i < salaries.length; i += 1) {
      sum += salaries[i];
    }
    
    return sum;
  }
  
  console.log(sumSalaries([35000, 25000, 55000, 75000, 43000]));

// b)  Write a function topEarner(salaries) that calculates and returns the name of the person 
// earning the highest salary
 
// number array

var salaries = [{
  employee: [
  {name: "Timothy", salary : 35000}, 
  {name: "David", salary: 25000}, 
  {name: "Mary", salary : 55000}, 
  {name: "Christina", salary : 75000}, 
  {name: "James", salary : 43000}
]
}
]; 
var max = {salary: 0};
salaries.forEach(p => p.employee.forEach(e => e.salary > max.salary && (max = e)));
console.log(max);




