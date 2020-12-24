const ftoc = function(temp) {
  let answer = Math.round(((temp -32)*(5/9)*10));
  return answer / 10;
}

const ctof = function(temp) {
  let answer = Math.round(((temp*(9/5)) + 32)*10)
  return answer / 10;
}

module.exports = {
  ftoc,
  ctof
}
