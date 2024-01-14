/* Accepts a sorted array and a value x, returns the floor of x in the array, which = largest element in the array that is
   smaller than or equal to x. If the floor does not exist, return -1. */
function findFloor(arrName, target) {
    if (arrName.length === 0 || arrName[0] > target) { return -1; }
    if (arrName[arrName.length - 1] < target) { return arrName[arrName.length - 1] }

    let leftIndex = 0;
    let rightIndex = arrName.length - 1;
    // Want to either find the target or have leftIndex and rightIndex be adjacent indices with value at leftIndex being the floor of
    // the target and value at rightIndex be the ceiling of the target (aka smallest value in array that's larger thant the target).
    while (rightIndex - leftIndex > 1) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arrName[middleIndex] === target) { return target; }
        else if (arrName[middleIndex] < target) { leftIndex = middleIndex; }
        else { rightIndex = middleIndex; }
    }
    return arrName[leftIndex];
}

console.log("Find floor:");
console.log("Test case 1 (expected 2): " + findFloor([1, 2, 8, 10, 10, 12, 19], 5));
console.log("Test case 2 (expected 19): " + findFloor([1, 2, 8, 10, 10, 12, 19], 20));
console.log("Test case 3 (expected -1): " + findFloor([1, 2, 8, 10, 10, 12, 19], 0));

/*expect(findFloor([1, 2, 8, 10, 10, 12, 19], 5)).toBe(2) // 2
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 20)).toBe(19) // 19
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 0)).toBe(-1) // -1*/