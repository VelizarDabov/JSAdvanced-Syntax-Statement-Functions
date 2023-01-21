function solve(arr){
let counter = 1;
let sortedArr = arr.sort((a,b) => a.localeCompare(b))
for (const name of sortedArr) {
    console.log(`${counter++}.${name}`);
}
}
solve(["John",

"Bob",

"Christina",

"Ema"])
