const PORT = 8001;

const http = require('http');
const _ = require('lodash');
const md5 = require('md5');

let server = http.createServer((request, res) => {
  let urlParts = request.url.match(/[^/]+/g) || [];
  let strGravatar = urlParts[0];
  if (strGravatar.toUpperCase() !== "GRAVATAR") {
    console.log("You don't want to see your gravatar url, eh?")
  } else {
    let email = urlParts[1];
    let md5Email = md5(email);
    let md5Url = `http://www.gravatar.com/avatar/${md5Email}`;
    console.log(md5Url);
    res.write(md5Url);
    res.end('\n');
  }
})

server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
})
