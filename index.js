// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeed = '17500';
let distanceToMarsKm = 225000000;
let distanceToTheMoonKm = 384400;
const milesPerKm = 0.621;

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToTheMoonKm);
console.log(typeof milesPerKm);

// Code your solution to exercises 3 and 4 here:
// Miles to Mars
let milesToMars = distanceToMarsKm * milesPerKm;

console.log(milesToMars);

// Hours to Mars
let hoursToMars = distanceToMarsKm / shuttleSpeed;

console.log(hoursToMars);

// Days to Mars
let daysToMars = hoursToMars / 24;

console.log(daysToMars);

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");

// Code your solution to exercise 5 here:
// Now Calculate a Trip to the Moon
let milesToMoon = distanceToTheMoonKm *  milesPerKm;
console.log(milesToMoon)

let hoursToMoon = distanceToTheMoonKm / shuttleSpeed;
console.log(hoursToMoon);

let daysToMoon = hoursToMoon / 24;
console.log(daysToMoon);

console.log(shuttleName + " will take " + daysToMoon + " days to reach Moon.");