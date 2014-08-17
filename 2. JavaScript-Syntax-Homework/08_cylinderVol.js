function calcCylinderVol(value) {
    var radius = value[0];
    var height = value[1];
    var volume = Math.PI * radius * radius * height;
    return volume.toFixed(3);
}

console.log(calcCylinderVol([2, 4]));
console.log(calcCylinderVol([5, 8]));
console.log(calcCylinderVol([12, 3]));