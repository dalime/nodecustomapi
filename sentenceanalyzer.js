const PORT = 8002;
const http = require('http');
const _ = require('lodash');
const wordcount = require('./wordcount.js');
const charcount = require('./charcount.js');
const avgwordlength = require('./avgwordlength.js');

let server = http.createServer((request, res) => {
  let arrURL = decodeURI(request.url).match(/[^/]+/g) || [];
  let state = arrURL[0];
  let str = arrURL[1];

  switch (state) {
    case "wordcount":
      let strWordCount = (wordcount(str)).toString();
      console.log(`word count: ${strWordCount}`);
      res.write(`word count: ${strWordCount}`);
      res.end();
      break;
    case "charcount":
      let strCharCount = (charcount(str)).toString();
      console.log(`character count: ${strCharCount}`);
      res.write(`character count: ${strCharCount}`);
      res.end();
      break;
    case "avgwordlength":
      let strAvgWordLength = (avgwordlength(str)).toString();
      console.log(`average word length: ${strAvgWordLength}`);
      res.write(`average word length: ${strAvgWordLength}`);
      res.end();
      break;
  }
})

server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
})
