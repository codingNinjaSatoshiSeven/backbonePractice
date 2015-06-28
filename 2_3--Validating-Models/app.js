var Book = Backbone.Model.extend({
  validate: function(attrs, opts) {
    if (attrs.published && typeof attrs.published !== 'number') {
      return "`publishe` should be a number.";
    }
  }
});

var book = new Book();
console.log(book.isValid()); // true
book.set({published: 'one'});
console.log('now ', book.isValid()); // false
console.log(book.validationError); 
book.set({published: 2001});
console.log('now ', book.isValid()); // true
book.set({published: 'one'});
console.log(book.get('published')); // invalid condition is still set

book.clear();
// coerce validation, this way if validation not pass, it won't be saved
console.log(book.set({published:'two'}, {validate: true})); // return false

console.log(book.set({published:1990}, {validate: true})); // return the updated obj
