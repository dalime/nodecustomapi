const PORT = 8000;

const http = require('http');
const _ = require('lodash');
const response = require('./response.js');

let server = http.createServer((request, res) => {
  let urlParts = request.url.match(/[^/]+/g) || [];

  let num1 = parseInt(urlParts[0]);
  let operator = urlParts[1];
  let num2 = parseInt(urlParts[2]);

  switch(operator) {
    case "plus":
      response("plus", num1, num2, res);
      break;
    case "minus":
      response("minus", num1, num2, res);
      break;
    case "times":
      response("times", num1, num2, res);
      break;
    case "dividedby":
      response("dividedby", num1, num2, res);
      break;
    case "tothe":
      response("tothe", num1, num2, res);
      break;
    default:
      response("default", num1, num2, res);
      break;
  }
})

server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
})
