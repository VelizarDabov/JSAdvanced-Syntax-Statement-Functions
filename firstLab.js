//1 Echo function
/*
function solve(input){
let stringLength = input.length;
let string = input;
console.log(stringLength);
console.log(string);
}
solve('Hello, JavaScript!');

//2 String Length

function solve(one, two, three){

let sumLength = one.length + two.length + three.length;
let averageLength = Math.floor(sumLength / 3);
console.log(sumLength);
console.log(averageLength);

}
solve('chocolate', 'ice cream', 'cake')

// 3 Largest Number

function solve(numOne, numTwo, numThree){
let result;
if(numOne > numTwo && numOne> numThree){
    result = numOne;
}else if(numOne<numTwo && numTwo > numThree){
    result = numTwo
}else{
    result = numThree
}
console.log(`The largest number is ${result}.`);

}
solve(5, -3 , 16)

function solve(numOne, numTwo, numThree){

   let sortNumbers = [numOne, numTwo, numThree].sort((a,b) => b - a).shift();

    console.log(`The largest number is ${sortNumbers}.`);
    
    }
    solve(5, -3 , 16)
    
   //4 Circle Area

   function solve(input){
let inputType = typeof(input)
let argument = input;
let result = 0;
if(inputType == 'number'){
result = Math.pow(argument, 2) * Math.PI;
console.log(result.toFixed(2));
}else{
    console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
}
   }
   solve('da')
   

   //5 Math operations

function solve(num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = num1 + num2
            break;

        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
        case '%':
            result = num1 % num2
            break;
        case '**':
            result = num1 ** num2
            break;
    }

    console.log(result);
}
solve(5, 6, '+');

//6 Sum of Numbers
 
function solve(n, m){
let numberN = Number(n);
let numberM = Number(m);
let sum = 0;

for(let i = numberN; i <= numberM; i++){
sum += i;
}
console.log(sum);
}
solve('-8', '20');



//7 Day of week

function solve(input){
let key = input;
let result = 0;
switch (key) {
    case 'Monday':
        result = 1;
        break;
        case 'Tuesday':
            result = 2;
        break;
        case 'Wednesday':
            result = 3;
        break;
        case 'Thursday':
            result = 4;
        break;
        case 'Friday':
            result = 5;
        break;
        case 'Saturday':
            result = 6;
        break;
        case 'Sunday':
            result = 7;
        break;
}
if(result > 0){
console.log(result);
}else{
    console.log('error');
}
}
solve('Mond')



function getDaysInMonth(month,year) {

   return new Date(year, month, 0).getDate();

  }

  console.log(getDaysInMonth(2, 2021)); 

  
 // 9 square of stars
  function solve(n) {
    const star = '* ';
    if (n === null || n === ' ' || n === 0) {
        for (let i = 0; i < 5; i++) {
            console.log(`${(star.repeat(5)).trim()}`);
        }
    } else {
        for (let i = 0; i < n; i++) {
            console.log(`${(star.repeat(n)).trim()}`);
        }
    }
}
 solve(1)
 */
// 10 aggregate element;

function solve(input){
let sum = 0;
let inverseSum = 0;
let concat = '';
for(let i = 0; i < input.length; i++){
    sum += input[i];
    inverseSum += 1 / input[i];
    concat += String(input[i]);
}
console.log(sum);
console.log(inverseSum);
console.log(concat);
}
solve([1, 2, 3])