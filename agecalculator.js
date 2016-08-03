const PORT = 8003;
const http = require('http');
const _ = require('lodash');
const moment = require('moment');

let server = http.createServer((request, res) => {
  let arrBirthdate = request.url.match(/[^/]+/g) || [];
  let strBirthdate = arrBirthdate[0];

  let birthMoment = moment(strBirthdate, 'MM-DD-YYYY');
  let age_ms = birthMoment.diff(moment());
  let durationStr = moment.duration(age_ms).humanize(true);

  console.log(`${strBirthdate} was ${durationStr}`);
  res.write(`${strBirthdate} was ${durationStr}`);
  res.end();
})

server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
})
