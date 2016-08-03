module.exports = function(str) {
  let arr = str.split(" ");
  let lengths = [];
  let sum = 0;
  arr.forEach(entry => {
    lengths.push(entry.length);
  })
  lengths.forEach(entry => {
    sum += entry;
  })
  let avg = sum / lengths.length;
  return avg;
}
