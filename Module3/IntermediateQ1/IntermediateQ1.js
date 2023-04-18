// 1. Create a function that takes a string as a parameter and returns the string with the first 
// character of each word changed into a capital letter

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }
 
 console.log(titleCase("my name is rachel"));