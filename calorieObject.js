function solve(arr){
let obj = {};
for(let i = 0; i < arr.length; i+=2){
   
    let product = arr[i]
   let cal = arr[i + 1]

   obj[product] = Number(cal)
}

return obj;
}
console.log(solve(['Yoghurt', '48', 'Rise', '138',

'Apple', '52']))