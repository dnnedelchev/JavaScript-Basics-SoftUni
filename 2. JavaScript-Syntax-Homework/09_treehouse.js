function treeHouseCompare(value) {
    var a = value[0];
    var b = value[1];
    var houseArea = a * a + 2/3 * a * a / 2;
    var treeArea = b * b/3 + Math.PI * b/3 * b/3 * 4;

    if(houseArea > treeArea) {
        return 'house/' + houseArea.toFixed(2);
    }
    else {
        return 'tree/' + treeArea.toFixed(2);
    }
}

console.log(treeHouseCompare([3,2]));
console.log(treeHouseCompare([3,3]));
console.log(treeHouseCompare([4,5]));