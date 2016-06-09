var $ = require('jquery');
var handlebars = require('Handlebars');
var _ = require('underscore');

console.log("Hello World!");

var url = "https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=yarn&includes=Images,Shop&sort_on=score";
var results = $.get('url');

console.log(results);
