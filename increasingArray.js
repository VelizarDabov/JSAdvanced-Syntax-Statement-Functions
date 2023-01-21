function solve(array){

let biggestNumber = array.shift();
const newArr = [biggestNumber];
for(const number of array){
    if(number >= biggestNumber){
        biggestNumber = number;
        newArr.push(number)
    }
}

return newArr
}
solve([1,

    3,
    
    8,
    
    4,10, 12, 3, 2, 24])