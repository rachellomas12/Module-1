// 2. Create a function truncate(str, max) that truncates a given string of text if its total 
//  length is greater than the max length. It should return either the truncated text, with an 
//  ellipsis (...) added to the end if it was too long, or the original text otherwise. 
// b)  Write another variant of the truncate function that uses a conditional operator. 

text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
console.log(text_truncate('Javascript is hard.'))
console.log(text_truncate('Javascript is hard.',8))
console.log(text_truncate('Javascript is hard.',16,'!!'))