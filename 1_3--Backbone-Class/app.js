
var Model1 = Backbone.Model.extend({
  initialize: function(attrs, opts) {
    console.log('created an instance of Model1');
  }
});

var m1 = new Model1({name: 'm1'});
console.log('name: ', m1.get('name'));

var Model2 = Backbone.Model.extend({
  // constructor will overide/delete all the backbone default initailization
  // helper function, which results in total customization from programmer
  constructor: function(attrs, opts) {
    console.log('created an instance of Model 2 (via constructor)');
  }
});

var Model3 = Model1.extend({
  initialize: function(attrs, opts) {
    //Model3.__super__.initialize.apply(this, arguments);
    console.log('created an instance of Model3');
  }
});

var Model4 = Model1.extend({
  initialize: function(attrs, opts) {
    // this call the super class's initialize method
    Model4.__super__.initialize.apply(this, arguments);
    console.log('created an instance of Model3');
  }
});

var m3 = new Model3({name: 'm3'});
console.log('name: ', m3.get('name'));

var m4 = new Model4({name: 'm4'});
console.log('name: ', m4.get('name'));

// the following will give error because constructor delete all the
// native backbone initialization method,
// so it doesn't know what to do with the input {name: 'm2'}
var m2 = new Model2({name: 'm2'});
console.log('name: ', m2.get('name'));