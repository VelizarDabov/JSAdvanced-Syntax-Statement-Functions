function solve(arr){
let sortedArr = arr.sort((a,b) => a.length - b.length || a.localeCompare(b))

return sortedArr.join('\n')
}
solve(['alpha',

'beta',
'gamma'])