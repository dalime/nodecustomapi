module.exports = function(str) {
  let arr = str.split(" ");
  let count = 0;
  arr.forEach(each => {
    count ++;
  });
  return count;
}
