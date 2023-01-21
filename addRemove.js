function solve(arr){
let newArr = [];
let counter = 1;

for(let i = 0; i < arr.length; i++){
    const command = arr[i];
    if(command === 'add'){
        newArr.push(counter++)
    }else{
        newArr.pop(counter++)
    }
}
if(!newArr.length){
    console.log('Empty');
}
console.log(newArr.join('\n'));
}
solve(['add', 'add', 'remove', 'add', 'add'])