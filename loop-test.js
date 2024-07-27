//  Write a JavaScript program that displays the largest integer among two integers.
function largestInteger (num1,num2){
  if (num1 > num2){
    console.log(num1 + " is larger than "+ num2)
  }else if(num1 < num2){
    console.log(num2 + " is larger than "+ num1)
  }else{
    console.log(num1 + " and "+num2 + "are equal")
  }
}
largestInteger(10,15)

// Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.