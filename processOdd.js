function solve(arr){
const filtered = arr.filter((x, i) => i % 2 == 1);
const doubled = filtered.map(x => x * 2);
const reversed = doubled.reverse();

return reversed.join(' ')
}
solve(['3', 0, 10, 4, 7, 3])