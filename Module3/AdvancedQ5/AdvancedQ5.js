/**
 * 5. The following car object has several properties and a method which uses them to print a 
description. When calling the function normally this works as expected, but using it from 
within setTimeout fails. Why?


 */

let car = {
    make: "Porsche",
    model: "911",
    year: 1964,
    description() {
      console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    },
  };
  car.description(); //works
  
  //a )Fix the setTimeout call by wrapping the call to car.description() inside a  function
  //Change the year for the car by creating a clone of the original and overriding i
  
  car = {...car, year: 2023};
  
  
  //Does the delayed description() call use the original values or the new values from  b)? Why
  
  //d) Use bind to fix the description method so that it can be called from within  setTimeout without a wrapper function
  
  let describeredCar = car.description.bind(car);
  setTimeout(describeredCar, 2000)
  
  //e Change another property of the car by creating a clone and overriding it, and test that  setTimeout still uses the bound value from d
  car = {...car, make: 'BMW'};
  setTimeout(function() {
    car.description()
  }, 2000);