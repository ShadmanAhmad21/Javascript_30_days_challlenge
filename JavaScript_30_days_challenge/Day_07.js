//Task 1
const obj1 = {
    title:"Theory of Everything",
    author:"Stephen Hawkins",
    year:2014
}
console.log(obj1);

//Task 2
console.log(obj1.author);

//Task 3
obj1.getDetails = function() {
    return `${this.title} by ${this.author}`;
  };
  console.log(obj1.getDetails()); 

//Task 4
obj1.updateYear = (newYear)=>{
    obj1.year = newYear
}
obj1.updateYear(2024)
console.log("Updated Year:", obj1.year);

//Task 5
const book1 = {
    title: "Book One",
    author: "Author One",
    year: 2021
  };
  const book2 = {
    title: "Book Two",
    author: "Author Two",
    year: 2022
  };
  const library = {
    name: "City Library",
    books: [book1, book2]
  };
  console.log(library);

//Task 6
library.books.forEach((book)=>{
console.log("Book Title:",book.title);})

//Task Thala
obj1.getTitleAndYear = function() {
    return `${this.title} was published in ${this.year}`;
  };
  console.log(obj1.getTitleAndYear());

//Task 8
const obj = {
    name: "Asfar",
    location: "Westbengal",
    
}
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

//Task 9
Object.keys(obj).forEach(key => {
    console.log(`${key}: ${obj[key]}`);
});