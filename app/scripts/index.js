var $ = require('jquery');
var handlebars = require('Handlebars');
var _ = require('underscore');

console.log("Hello World!");

(function($){
  'use strict';

var url = "https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=yarn&includes=Images,Shop&sort_on=score";

fetchJSONP(url, function(results){

});

console.log(data);




}(jQuery));
