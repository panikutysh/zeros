module.exports = function getZerosCount(number) {
  var CountZeros = 0;
  Efficient5 = 0; 
  Divider = number;
  while (Divider>=5) 
  {
    Divider = Divider/5;
    Efficient5 = Efficient5 + 1;
  }
  for (let index = 1; index < Efficient5; index++) 
  {
    CountZeros = CountZeros + parseInt((number/Math.pow(5,index)));
  }
  return CountZeros+1;
}

