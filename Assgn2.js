//program for fizzbuzz
// using Number.Integer() method
//BY SHRIYA SINGH 
//LETSUPGRADE JAVASCRIPT ZERO TO HERO


for(var i=1;i<=100;i++)
{
  if(Number.isInteger(i/15)){
    console.log("FizzBuzz") 
    
  } 
    else if(Number.isInteger(i/3)){
      console.log("Fizz") 
      
    } 
    else if(Number.isInteger(i/5)){ 
      console.log("Buzz")
      }
      else{ 
        console.log(i)
        }
}