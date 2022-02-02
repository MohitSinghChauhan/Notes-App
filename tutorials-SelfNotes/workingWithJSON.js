// * JS object
const book = {
    name:"Ego is the Enemy",
    author:"Ryan Holiday"
}

// * Converting JS Object to JSON
const bookJSON = JSON.stringify(book);
console.log(bookJSON);


// * JSON is like JS Object but it is only a string (text) don't have functionalities like JS Objects
// * Hence we cannot use methods on JSON data
console.log(bookJSON.name); // undefined

// * So for working with JSON data we need to parse it
const parsedJSON = JSON.parse(bookJSON);
console.log(parsedJSON.name); // Ego is the Enemy
