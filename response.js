const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const exponent = require('./exponent');

module.exports = function(state, num1, num2, res) {
  switch (state) {
    case "plus":
      res.write( add(num1, num2) );
      res.end('\n');
      break;
    case "minus":
      res.write( subtract(num1, num2) );
      res.end('\n');
      break;
    case "times":
      res.write( multiply(num1, num2) );
      res.end('\n');
      break;
    case "dividedby":
      res.write( divide(num1, num2) );
      res.end('\n');
      break;
    case "tothe":
      res.write( exponent(num1, num2) );
      res.end('\n');
      break;
    case "default":
      res.statusCode = 404;
      res.end("Not found.\n");
      break;
  }
}
