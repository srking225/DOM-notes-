/*
FIZZBUZZ WHITEBOARDING CHALLENGE (pair coding)
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - print out the number if neither.
        * "print = console.log"
*/
//


let fb = 0;

for (let i = 1; i <= 100; i++) {
    fb = i;

    if (fb % 3 === 0 && fb % 5 === 0) {  // or if(fb % 15 === 0)
        console.log('fizz buzz')
    } else if (fb % 5 === 0) {
        console.log('buzz');
    } else if (fb % 3 === 0) {
        console.log('fizz');
    } else {
        console.log(fb);
    }
}


Function evenOrOdd(num){
    if (num % 2 == 0){
      return "the number is even";
    }else if{
      return "the number is odd";
    }else{
      return "what is this?";
    }
  }


  let num = 0;
for(let i = 1; i <=10; i++){
  num = i;
}

if(num % 2 === 0){
  console.log("the number is even");
}else if (num % 2 !== 0){
  console.log('the number is odd');
}else {
  console.log ("what is this?");
}


let num = 0;
for (let i = 1; i <= 10; i++){
    sum = i;

let everOrOdd = function (i){
    if (i % 2 === 0){
        return("the number is even");
    }else {
        return("the number is  odd");
}
}
}

let num1 = 50;

if(isNaN(num1)){
  console.log("what is this?");
}else if{
  (num1 % 2 === 0 ) ;
console.log("the number is even");
}else
{
  console.log("the number is odd");
}
