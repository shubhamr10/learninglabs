const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 0,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// //Destrucutring
// // fetches all the books
// const books = getBooks();

// const book = getBook(5);
// // const title = book.title;
// // const authon = book.author;

// // object destructuring
// const { title, author, genres } = book;

// console.log(title, author);

// genres;
// // array destructuring
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// const [firstGenre, secondGenre] = genres;

// console.log(primaryGenre, secondaryGenre);
// console.log(firstGenre, secondGenre);

// const newArr = [];
// const [ele] = newArr;

// // REST OPERATOR - assign the rest of the elements to a new array, used during destructuring in array & object
// // collects the rest of the elements in an array
// const [first, second, ...otherGeneres] = genres;
// console.log(first, second, otherGeneres);
// // output : fantasy high-fantasy [ 'adventure', 'fiction', 'novels', 'literature' ]

// const newObj = {
//   name: "John",
//   age: 25,
//   city: "New York",
//   address: "123 Main St",
//   phone: "555-555-5555",
// };

// // collects the rest of the properties in an object
// const { name, age, ...rest } = newObj;
// console.log(name, age, rest);
// // output : John 25 { city: 'New York', address: '123 Main St', phone: '555-555-5555' }

// // REST OPERATOR IS USED TO RECIEVE ELEMENTS to variable

// // SPREAD OPERATOR
// // used to spread the elements of an array or object
// // used in array, object, function arguments
// // array spread

// const book4 = getBook(4);
// const genres4 = book4.genres;
// const newGenres = ["fiction", "novels", "literature", ...genres4];
// console.log(newGenres);

// // object spread
// const book5 = getBook(5);
// const updatedBook = { ...book5, author: "George R. R. Martin", pages: 104 };
// console.log(updatedBook);
// console.log(book5);

// // SPREAD - OVERRIDE OR ADD ELEMENTS
// // REST - COLLECT THE REST OF THE ELEMENTS

// // TEMPLATE LITERALS : ES6
// // backticks ``
// // string interpolation - ${}
// // multi-line strings -
// // embedded expressions - ${}
// // tagged templates -
// // raw strings

// const summary = `${title} by ${author} is a ${primaryGenre} book`;
// console.log(summary);

// const multiLine = `This is a ${title} about ${author} in
// ${primaryGenre} and ${secondaryGenre} with ${genres.length} genres and ${
//   book.pages
// } pages, published on ${book.publicationDate.split("-")[0]}`;
// console.log(multiLine);

// // TERNARY OPERATOR - USED TO ASSIGN VALUE BASED ON CONDITION, kind of if-else
// // condition ? expression1 : expression2

// const rating = book.reviews.goodreads.rating;
// const ratingText = rating > 4.5 ? "high" : "low";
// const ratingSummary = `${title} has a ${ratingText} rating of ${rating}`;
// console.log(ratingSummary);

// const pageRange = book.pages > 500 ? "long" : "short";
// console.log(pageRange);

// const neeSummary = `${title} is a ${pageRange} ${ratingText} book with ${book.pages} pages, with rating of ${rating}, which is ${ratingText} rated.`;
// neeSummary;

// // Arrow functions
// // concise syntax for writing functions
// // no function keyword, no return keyword
// // implicit return for single expression
// // no block scope, no this binding
// // lambda functions : (param1, param2) => expression
// // difference between arrow function and lambda function.
// // arrow function : (param1, param2) => expression
// // lambda function : (param1, param2) => { return expression; }
// // arrow function : (param1, param2) => { return expression; }
// // lambda function : (param1, param2) => expression
// // IS LAMBDA FUNCTION SAME AS ARROW FUNCTION? - YES

// // normal function - function declaration
// function getPulicationYear(publicationDate) {
//   return publicationDate.split("-")[0];
// }
// const summary3 = `${title} was published in ${getPulicationYear(
//   book.publicationDate
// )}`;
// console.log(summary3);

// // arrow function - function expression
// const getPublicationYear = (publicationDate) => publicationDate.split("-")[0];
// const summary4 = `${title} was published in ${getPublicationYear(
//   book.publicationDate
// )}`;

// // SHORT CIRCUITING - AND, OR OPERATORS
// // AND OPERATOR - && - returns the first falsy value or the last value
// // OR OPERATOR - || - returns the first truthy value or the last value
// // used to assign default values, conditionally render elements, check for null or undefined
// // falsy values : false, 0, '', null, undefined, NaN
// // truthy values : true, 1, 'hello', [], {}, function() {}

// console.log(true && "hello");
// console.log(false && "hello"); // shortcuiuting

// if (book.hasMovieAdaptation) {
//   console.log(`${title} has a movie adaptation`);
// } else {
//   console.log(`${title} does not have a movie adaptation`);
// }

// // You can use short circuiting to simplify the above code
// book.hasMovieAdaptation && console.log(`${title} has a movie adaptation`); // acts as if first is truthy, then only second will be executed
// // false value && anything = false
// console.log(0 && "hello");

// // OR OPERATOR - || - returns the first truthy value or the last value
// const hasSpanishTranslation =
//   book.translations.spanish || "No translation available";
// console.log(hasSpanishTranslation); // truthy value so it will return the first value

// const hasChineseTranslation =
//   book.translations.chinese || "No translation available";
// console.log(hasChineseTranslation); // falsy value so it will return the last value, i.e else value

// // Word of caution - use short circuiting only when you are sure about the values, otherwise use if-else

// const cautingShortCircuit =
//   book.reviews.librarything.reviewsCount || "No data available";
// console.log(cautingShortCircuit); // 0 is a falsy value, so it will return the last value
// // ever though there is a value of 0 present

// // NULLISH COALESCING OPERATOR - ??
// // checks for null or undefined values, not for falsy values
// const nullishValue = book.reviews.librarything.reviewsCount ?? "No data available";

// // OPTIONAL CHAINING OPERATOR ?. - used to access nested properties without throwing an error

// // function getTotalReviewsCount(book) {
// //   const goodreadsReviewsCount = book.reviews.goodreads.reviewsCount;
// //   const librarythingReviewsCount = book.reviews.librarything.reviewsCount;
// //   return goodreadsReviewsCount + librarythingReviewsCount;
// // }

// function getTotalReviewsCountUsingOptionalChaining(book) {
//   const goodreadsReviewsCount = book.reviews.goodreads.reviewsCount;
//   const librarythingReviewsCount = book.reviews.librarything?.reviewsCount;
//   return goodreadsReviewsCount + librarythingReviewsCount;
// }

// function getTotalReviewsCountUsingOptionalChainingAndNullishCoalescingOperator(book) {
//   const goodreadsReviewsCount = book.reviews.goodreads.reviewsCount;
//   const librarythingReviewsCount = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodreadsReviewsCount + librarythingReviewsCount;
// }

// // console.log(getTotalReviewsCount(getBook(3))); // Cannot read property 'reviewsCount' of undefined
// // // because librarything is not present in the book 3

// console.log(getTotalReviewsCountUsingOptionalChaining(getBook(3))); // Nan
// console.log(getTotalReviewsCountUsingOptionalChainingAndNullishCoalescingOperator(getBook(3))); // 49701

// // Array methods
// // immutable methods - do not change the original array
// // map - creates a new array by calling a function on each element in an array
// // filter - creates a new array with elements that pass a test
// // reduce - reduces an array to a single value
// // find - returns the first element that passes a test
// // forEach - calls a function on each element in an array
// // some - checks if at least one element passes a test
// // every - checks if all elements pass a test
// // includes - checks if an array includes a certain element
// // indexOf - returns the index of the first element that matches a value
// // concat - merges two or more arrays
// // slice - returns a portion of an array
// // splice - adds or removes elements from an array
// // sort - sorts an array
// // reverse - reverses an array

// // mutable methods - change the original array
// // push - adds elements to the end of an array
// // pop - removes the last element of an array
// // shift - removes the first element of an array
// // unshift - adds elements to the beginning of an array
// // fill - fills all the elements in an array with a static value
// // copyWithin - copies array elements to another position in an array
// // flat - creates a new array with all sub-array elements concatenated into it
// // flatMap - creates a new array by calling a function on each element in an array, then flattening the result
// // splice - adds or removes elements from an array

// // MAP
// const bookTitles = books.map((book) => book.title);
// console.log(bookTitles);

// const bookAuthors = books.map((book) => book.author);
// console.log(bookAuthors);

// const essentionalData = books.map((book) => ({title, author, genres}));
// console.log(essentionalData);
// // Array.prototype.flat;
// // // implementation of flat method
// // function flat(arr) {
// //   return arr.reduce((acc, val) => acc.concat(val), []);
// // }
// // // implmentation of flat method using recursion
// // function flat(arr) {
// //   return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flat(val) : val), []);
// // }
// // // implementation of flat method using recursion but only use push method, no other methods
// // function flat(arr) {
// //   const result = [];
// //   arr.forEach((val) => {
// //     if (Array.isArray(val)) {
// //       result.push(...flat(val));
// //     } else {
// //       result.push(val);
// //     }
// //   });
// //   return result;
// // }

// // // Write me all implementation of flat method in every way possible
// // function flat(arr) {
// //   return arr.reduce((acc, val) => acc.concat(val), []);
// // }

// // function flat(arr) {
// //   return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flat(val) : val), []);
// // }

// // function flat(arr) {
// //   const result = [];
// //   arr.forEach((val) => {
// //     if (Array.isArray(val)) {
// //       result.push(...flat(val));
// //     } else {
// //       result.push(val);
// //     }
// //   });
// //   return result;
// // }

// // Filter method
// const fantasyBooks = books.filter((book) => book.genres.includes("fantasy"));
// console.log(fantasyBooks);

// const highFantasyBooks = books.filter((book) => book.genres.includes("high-fantasy"));
// console.log(highFantasyBooks);

// const longBooks = books.filter((book) => book.pages > 500);
// console.log(longBooks);

// // sorting using sort method
// // sorting and ordering

// const adventuresBooks = books.filter((book) => book.genres.includes("adventure")).map((book) => book.title);
// console.log(adventuresBooks);

// // faster implemetation of sorting in arrays
// const sortedAdventuresBooks = [...adventuresBooks].sort();
// console.log(sortedAdventuresBooks);

// const sortedAdventuresBooksDesc = [...adventuresBooks].sort((a, b) => b.localeCompare(a));
// console.log(sortedAdventuresBooksDesc);

// // REDUCE METHOD
// // reduce method is used to reduce an array to a single value
// // Reduce method
// const totalBooks = books.length;
// const totalPages = books.reduce((acc, book) => acc + book.pages, 0);

// const averagePages = totalPages / totalBooks;
// console.log(averagePages);

// const totalReviewse = books.reduce((acc, ebook) => {
//   const egoodreadsReviewsCount = ebook.reviews.goodreads.reviewsCount;
//   const elibrarythingReviewsCount = ebook.reviews.librarything?.reviewsCount ?? 0;
//   return acc +  egoodreadsReviewsCount + elibrarythingReviewsCount;
// }, 0);
// console.log(totalReviewse);

// // SORT METHOD
// // sort method is used to sort an array
// // sort method sorts the array in place and returns the sorted array
// // sort method takes an optional compare function
// // compare function is used to compare two elements in the array
// // if compare function returns a negative value, a is sorted before b
// // if compare function returns a positive value, b is sorted before a
// // if compare function returns 0, a and b remain unchanged
// // compare function takes two arguments - a, b
// const sortedBooks = books.map(b => b.title).sort((a, b) => a.localeCompare(b));
// console.log(sortedBooks);

// const arrayNUm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sortedArrayNum = arrayNUm.sort((a, b) => b - a);
// console.log(sortedArrayNum); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
// console.log(arrayNUm); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
// // the original array is also sorted, because sort method is mutable

// // it can be solved by using arr.slice() method
// const arrayNUm2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sortedArrayNum2 = arrayNUm2.slice().sort((a, b) => b - a);
// console.log(sortedArrayNum2); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
// console.log(arrayNUm2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// // SORTING OBJECTS
// // sort method can be used to sort objects
// const sortedBooksByPages = books.slice().sort((a, b) => a.pages - b.pages);
// console.log(sortedBooksByPages);

// // WORKING WITH IMMUTABLE ARRAYS
// // 1. add a new book object to a new array without mutating the original array
// const newBook = {
//   id: 6,
//   title: "The Hobbit",
//   publicationDate: "1937-09-21",
//   author: "J. R. R. Tolkien",
//   genres: ["fantasy", "adventure", "fiction", "novels", "literature"],
//   hasMovieAdaptation: true,
//   pages: 310,
//   translations: {
//     spanish: "El hobbit",
//     chinese: "哈比人",
//     french: "Le Hobbit",
//   },
//   reviews: {
//     goodreads: {
//       rating: 4.27,
//       ratingsCount: 2813494,
//       reviewsCount: 40883,
//     },
//     librarything: {
//       rating: 4.12,
//       ratingsCount: 18333,
//       reviewsCount: 0,
//     },
//   },
// };

// const booksAfterAdding = [...books, newBook];
// console.log(booksAfterAdding);

// // 2. delete a book from array without mutating the original array
// const bookToDelete = 2;
// const booksAfterDeleting = booksAfterAdding.filter((book) => book.id !== bookToDelete);
// booksAfterDeleting;

// // 3. update a book in array without mutating the original array
// const bookToUpdate = 4;
// const booksAfterUpdating = booksAfterDeleting.map((book) => book.id === bookToUpdate ? { ...book, title: "Harry Potter and the Sorcerer's Stone" } : book);
// booksAfterUpdating;

// Using Asynchronous JavaScript

// using promises
// promises are used to handle asynchronous operations in JavaScript

// const resp = fetch("https://jsonplaceholder.typicode.com/todos/1");

// resp.then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });
// 4;
// // TLA - Top Level Await
// async function getTodo() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   console.log(data);
// }

// getTodo();

// implement the above function using TOP LEVEL AWAIT

// const rep = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const data2 = await rep.json();
// console.log(data2);

console.log("starting loot");
for (let i = 1; i <= 1000000000; i++) {
  if (i == 100000000) {
    console.log("done");
  }
}
// is the above code blocking the code execution?
// NO, because it is not an asynchronous code

console.log("this is a completed");

// nullish coalescing operator - ??
// optional chaining operator - ?.
// short circuiting - &&, ||
// array methods
// map, filter, reduce, sort
// working with immutable arrays
// promises
// async/await
