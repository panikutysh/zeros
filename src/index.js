var Dividers = [];
var CountZerosDividers = [];
module.exports = function getZerosCount(number) {
  var CountZeros = 0;
  var CurrentCountZeros = 0;
  if (FindDividersScaleOfNotation(10))
  {
    for (let index = 0; index < Dividers.length; index++) 
    {
      CurrentCountZeros = UseLegendresFormula(Dividers[index],number);
      if ((CurrentCountZeros<CountZeros)&&(CountZeros>0))
      {
        CountZeros = CurrentCountZeros;
      }
      else if (CountZeros=0) 
      {
        CountZeros = CurrentCountZeros;
      }
    }
  }
  return CurrentCountZeros;
}

function FindDividersScaleOfNotation(ScaleOfNotation) {
  var Divider = 2;
  var NotFound = true;
  while (ScaleOfNotation > 1)
  {
    while (ScaleOfNotation % Divider == 0) 
    {
      ScaleOfNotation = ScaleOfNotation / Divider;
      for (let index = 0; index < Dividers.length; index++) 
      {
        if (Dividers[index]==Divider)
        {
          NotFound = false;
        }  
      }
      if (NotFound)
      {
        Dividers.push(Divider);
      }
      NotFound = true;
    }
    Divider = Divider + 1;
  }
  return true;  
}

function UseLegendresFormula(Divider,Factorial) 
{
  var power = 1;
  var flag = true;
  var CountZerosDividerInFactorial = 0;
  while(flag)
  {
    if (Factorial >= Math.pow(Divider,power))
    {
      power = power + 1; 
    }
    else
    {
      flag = false;
    }
  }
  while (power > 0 )
  {
    CountZerosDividerInFactorial = CountZerosDividerInFactorial + parseInt(Factorial/(Math.pow(Divider,power)));
    power = power - 1;
  }

  return CountZerosDividerInFactorial;
} 