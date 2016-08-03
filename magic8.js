const PORT = 8004;
const http = require('http');
const _ = require('lodash');
const moment = require('moment');

let server = http.createServer((request, res) => {
  let arrQuestion = request.url.match(/[^/]+/g) || [];
  let strQuestion = arrQuestion[0].toString();
  let strYesNo;
  let intYesNo = Math.floor(Math.random() * 2);
  if (intYesNo === 0) {
    strYesNo = "Yes.";
  } else {
    strYesNo = "No.";
  }

  console.log(`${strYesNo}`);
  res.write(`${strYesNo}`);
  res.end();
})

server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
})
