function solve(numOne, numTwo){
    let divisors = [];
for (let i = 0; i < numOne; i++){
    if(numOne % i === 0 && numTwo % i === 0 ){
divisors.push(i)
    }
}
console.log(divisors.pop());
}
solve(15, 5)