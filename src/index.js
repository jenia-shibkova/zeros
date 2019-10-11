module.exports = function zeros(expression) {
  const arr = expression.split('*');
  let zeros = 0;

  for (let i = 0; i < arr.length; i++) {    
    let number = +arr[i].match(/\d+/);   

    if (arr[i].match(/\!{2}/)) {           // if factorial!!  
      if (number % 2 === 0) {                       // чётные 
        zeros += Math.floor(number / 10); 
      } else if (number % 2 !== 0) {                // нечётные
        zeros += Math.floor(number / 5); 
      }
    } else {                              // else factorial!
      while (number) {
        number = (number / 5) | 0 ;
        zeros += number;
      }                             
      
    }
  }     

  return zeros;
}



