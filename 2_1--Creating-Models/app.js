var Book = Backbone.Model.extend({
  defaults: {
    title: 'zzz'
  }
});

var book = new Book();
console.log(book.get('title')); // should print 'zzz'
var book2 = new Book({title: 'yyy'});
console.log(book2.get('title')); // should print 'yyy'

var Test = Backbone.Model.extend({
  // benefits of using function is for something like
  // date, or timestamp, it is created for each 
  // instance created, not when the model is created
  defaults: function() {
    return {
      time: new Date()
    };
  }
});

var test1 = new Test();
console.log(test1.get('time'));
var delay = 3000;
setTimeout(function() {
  var test2 = new Test();
  console.log(test2.get('time'));
}, delay);


