function solve(speed, zone){
const carSpeed = Number(speed);
let speedLimit = 0;
let status = '';
let diff = 0;
switch (zone) {
    case 'city':
        speedLimit = 50;
        break;
        case 'residential':
        speedLimit = 20;
        break;
        case 'interstate':
        speedLimit = 90;
        break;
        case 'motorway':
        speedLimit = 130;
        break;
}if(speedLimit >= carSpeed){ 
return`Driving ${carSpeed} km/h in a ${speedLimit} zone`;
}

if(carSpeed > speedLimit){
    diff = carSpeed - speedLimit
    if(diff<=20){
status = 'speeding'
    }else if(diff <= 40){
        status = 'excessive speeding'
    }else{
        status = 'reckless driving'
    }
}
return `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
}
solve(200, 'motorway')