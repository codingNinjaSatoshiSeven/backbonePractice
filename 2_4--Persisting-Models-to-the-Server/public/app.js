var Book = Backbone.Model.extend({
  // define get/post url 
  urlRoot: '/books'
  /* create: POST /books
     read: GET /books/:id
     update: PUT /books/:id
     destroy: DELETE /books/:id
  */
});

/* 
var book = new Book();
book.isNew();  // this will check if the new model instance is saved
// to the server.. it will return true if it is NOT
book.set({author: 'Arthur'});
book.save(); // save to server
*/

/*
var book = new Book();
book.save({author: 'Arthur C. Doyle', title: 'Sign of the Four'});
book.get('id');

book.set({published: 1893});
book.save(); // this will be a put request
*/

var book = new Book({id: 1});
book.fetch().complete(function() {
  console.log(book.values());
}); // get from database
//console.log(book.values()); // this won't work because of async issue
/*
book.destroy(); // destroy data

book = new Book({id:1});
book.fetch(); // this will get null response b/c it's destroyed in backedn already
book.save({author:'test'});
console.log(book.get('id'));
book.set({published: 1893});
console.log(book.get('published'));
*/
