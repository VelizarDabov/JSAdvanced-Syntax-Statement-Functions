function solve(array, delimiter){
    let newArray = '';
for(let i = 0; i < array.length; i++){
newArray += array[i];
if(array.length -1 > i){
    newArray += delimiter
}
}
return newArray

}
solve(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_')