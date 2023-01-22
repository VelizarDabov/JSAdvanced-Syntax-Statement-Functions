function solve(array){
    let populationObj ={};
  
    for (const line  of array) {
        const tokens = line.split(' <-> ');
        const name = tokens[0];
        const population = Number(tokens[1]);

        if(name in populationObj){
            populationObj[name] += population;
        }else{
            populationObj[name] = population
        }
    }

for (const name in populationObj) {
    console.log(`${name} : ${populationObj[name]}`);
}
    }

solve(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',


'Istanbul <-> 1000'])