var Book = Backbone.Model.extend({});
var book = new Book({title: 'Sign of the Four'});
console.log(book.get('title'));
// setting parameter
book.set('author', 'Arthur Conan Doyle');
// also work with book.set({author: 'Authur Conan Doyle'})
console.log(book.get('author'));
book.set({publish_date: 1893, in_stock: true});

book.set({displayTitle: '<h1>Sign of the Four</h1>'});
console.log(book.get('displayTitle'));
console.log(book.escape('displayTitle')); // escape the tags

console.log(book.has('displayTitle')); // does it have certain attribute?
book.unset('displayTitle');
console.log('now ', book.has('displayTitle')); // after unseting, it will not have 

// book.clear() /// don't use it as it will remove all the attribute, including default

console.log(book.attributes); // access the attributes directly, not recommended
// as you can modify the attributes accidentally
console.log(book.toJSON()); // this return a copy of all the attribute, safer


// checking if certain attributes have been changed
console.log(book.hasChanged('displayTitle'));
console.log(book.changed); // display all the changes from prev set
console.log(book.changedAttributes()); // return a copy of changed attributs

// check previous attributes
console.log('previous ', book.previous('displayTitle'));
console.log(book.previousAttributes());

console.log(book.keys()); // get all the keys
console.log(book.values()); // get all the values;
console.log(book.pairs()); // key value pair
// book.invert() /// this will invert the key object pair

console.log(book.pick('author', 'title')); // pick the key 
