function solve(steps, footprint, speed){
const distanceInMeters = steps * footprint;
const speedInMeterPerSecond = speed / 3.6;
const breakMins = Math.floor(distanceInMeters / 500);
let time = distanceInMeters / speedInMeterPerSecond;
 
let hours = Math.floor(time / 3600);
let minutes = Math.floor(time / 60) + breakMins;
let seconds = Math.round(time % 60);


console.log(`${(hours < 10) ? '0' : ''}${hours}:${minutes<10 ? '0': ''}${minutes}:${seconds < 10 ? '0': ''}${seconds}`);
}
solve(2564, 0.70, 5.5)