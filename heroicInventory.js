function solve(arr){
let obj = [];

for(let i = 0; i < arr.length; i++){
    let line = arr[i].split(' / ');
    let [name, level, item] = line;

    heroes = { 
        name,
        level : Number(level),
        items: item? item.split(', ') : [],
    }
obj.push(heroes)
}
return console.log(JSON.stringify(obj));

}
solve(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara'])