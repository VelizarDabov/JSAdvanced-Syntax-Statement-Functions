function rectangle(width, height, color){

    const currResult ={
        width,
        height,
        color: color.replace(color[0], color[0].toLocaleUpperCase()),
        calcArea(){
            return (width * height);
        }
      
    }
    return currResult
}
let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());

function solve(rect){

}
solve(rect)