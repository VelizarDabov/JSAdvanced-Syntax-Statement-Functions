function solve(arr){
const result = [];

for (let  element of arr) {
    if(element < 0){
        result.unshift(element)
    }else{
        result.push(element)
    }
}
console.log(result);

}
solve([7, -2, 8, 9])