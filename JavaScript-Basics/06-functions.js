//1     //2
function hello(){
    //3
    console.log("Hello World!");
}
hello();
hello();
hello();

function pacersWon(){
    console.log("Pacers Won!");
}
pacersWon();
pacersWon();

///function with one parameter:

function numberEnered(num){
    console.log("The number you entered was: ", num);
}
numberEnered(5);
numberEnered(4);
numberEnered(3);
numberEnered(2);
numberEnered(1);

//// Function with two parameters:
function addAnyTwoNumbers(x,y){
    console.log(x + y);
}
addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

///RETURNS
function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage (250, 91));

function greet(name){
    return"hello" + name
};
var myName = "Jack";
result = greet(myName);
console.log(result);

function sayNumber(num){
    console.log(num)
};
for(var i = 0; i < 25; i++){
    sayNumber(i);
};
