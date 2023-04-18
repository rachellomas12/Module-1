// Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
function camelCase( dashed ) {
    if( typeof dashed != "string" || dashed.length==0 )
      return "";
    return dashed.toLowerCase().replace(/\-([a-z]?)/g, function(match, letter) {
        return letter.toUpperCase();
    });
  }

console.log(camelCase('margin-left')) 
console.log(camelCase('background-image')) 
console.log(camelCase('display')) 

