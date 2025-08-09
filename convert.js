function inchToFeet(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchremaining = inch % 12;
    const result = feetNumber+ ' ft ' + inchremaining+ ' inch ';
    return result;
}
const height = inchToFeet(75);
console.log(height);


function milesToKm(mile){
    const km = mile * 1.60934;
    return km;
}
const distance = milesToKm(3);
console.log(distance);


function kmToMiles(km){
    const mile = km * 0.621371;
    return mile;
}
const distances = kmToMiles(4.82802);
console.log(distances);