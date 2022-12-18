function solve(input,one, two, three, four, five){
    let startingPoints = Number(input);
    let actionOne = one;
    let actionTwo = two;
    let actionThree = three;
    let actionFour = four;
    let actionFive = five;
    
    let arr = []
  arr.push(actionOne, actionTwo, actionThree, actionFour,actionFive)
let counter = 0;

   let command = arr.shift();
   while(counter < 5){
counter++;
switch (command) {
    case 'chop':
        startingPoints /= 2;
        break;
        case 'dice':
        startingPoints = Math.sqrt(startingPoints);
        break;
        case 'spice':
        startingPoints += 1;
        break;
        case 'bake':
        startingPoints *= 3;
        break;
        case 'fillet':
        startingPoints = startingPoints * 0.80;
        break;
  
}

console.log(startingPoints);
    command = arr.shift();
   }

}
solve('9', 'dice', 'spice', 'chop', 'bake',

'fillet')