function solve(year, month, day){

const today = new Date(year, month - 1, day);
const yesterday = new Date(today)

yesterday.setDate(yesterday.getDate() - 1)

today.toDateString()
yesterday.toDateString()

console.log(`${yesterday.getFullYear()}-${yesterday.getMonth()+1}-${yesterday.getDate()}`);
}
solve(2015, 12, 10)