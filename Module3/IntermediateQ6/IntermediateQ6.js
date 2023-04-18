// 6. Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.
// Test with the following arrays and create another one of your own.

const shapes = ['square', 'circle', 'square', 'circle', 'rectangle', 'square', 'circle', 'square']
let unique = [...new Set(shapes)];

console.log(unique) 

