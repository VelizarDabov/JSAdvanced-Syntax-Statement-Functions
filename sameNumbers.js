function solve(number){
let sum = 0;
let toString = number.toString().split('');
let numberLength = toString.length;
let counter = 1;

for(let i = 0; i < numberLength; i++){
    sum += Number(toString[i]);
    if(toString[0] == toString[i +1]){
counter++
    }
}
if(counter === numberLength){
    console.log('true');
    console.log(sum);
}else{
    console.log('false');
    console.log(sum);
}
}
solve(2222222)