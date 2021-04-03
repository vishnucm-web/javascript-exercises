const fibonacci = function(limit) {
  let a=0,b=1,c=0,fibStr='';
  fibStr = a+","+b;
  for(i=2;i<limit;i++)
  {
    c=a+b;
    a=b;
    b=c;
    fibStr = c+",";
  }
  return fibStr;
}

module.exports = fibonacci
