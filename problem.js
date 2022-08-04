var fruits = ['Apple','banana' , 'orange'];
// index of banana
console.log(fruits.indexOf('banana'));
fruits.pop();
fruits[1] ='mango';
console.log(fruits); 

// problem 2
var examNumber = 40;
if (examNumber>=80){
    console.log('A+');
}else if (examNumber<=80 && examNumber>=60){
    console.log('B');
}else if (examNumber<60 && examNumber>=50){
    console.log('C');
}else if (examNumber>=40 && examNumber<50) {
    console.log('D');
}else{
    console.log('Fail');
}

// problem 3

var num1 = 1322;
var num2 = 79;
var num3 = 425;

if ((num1>num2) &&(num1>num3)){
    console.log(num1);
}else if ((num2>num1)&&(num2>num3)) {
    console.log(num2);
}else{
    console.log(num3);
}


// problem 4 

var side1 = 7;
var side2 = 2;
var side3 = 2;
if ((side1==side2) || (side2==side3) || (side1==side3)) {
    console.log('Triangle');
}else{
    console.log('Not');
}


