// 7. Use the following array of book objects to practice the array functions for map, find and 
// filter.
// a)  Write a function getBookTitle(bookId) that uses the find function to return the 
// title of the book object with the matching id. 
const books = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
  ];
  const getBookTitle = books.find(({id}) => id === 2);
  console.log(getBookTitle);
  
  // b)  Write a function getOldBooks() that uses the filter function to return all book 
  // objects written before 1950.
  const books1 = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
  ];
  
  let getOldBooks = books1.filter(book => book.year <= 1950);
  
  console.log(getOldBooks);
  
  // c)  Write a function addGenre() that uses the map function to add a new genre property 
  // to all of the above books, with the value ‘classic’.
  
books.map(addGenre)
function addGenre(bookObject){
bookObject.genre="classic";

console.log(books)
}