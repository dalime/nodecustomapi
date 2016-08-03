const PORT = 8006;
const http = require('http');
const _ = require('lodash');
const moment = require('moment');
const filter = require('profanity-filter');

let server = http.createServer((request, res) => {
  let arrPhrase = decodeURI(request.url).match(/[^/]+/g) || [];
  filter.setReplacementMethod('word');
  filter.addWord('ass', 'badonkadonk');
  filter.addWord('fuck', 'freak');
  filter.addWord('shit', 'doodoo');
  filter.addWord('bitch', 'Sylvia');
  filter.addWord('bastard', 'illegitimate child');
  let strPhrase = arrPhrase[0];
  let filteredPhrase = filter.clean(strPhrase);

  console.log(`${filteredPhrase}`);
  res.write(`${filteredPhrase}`);
  res.end();
})

server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
})
