/* Accepts an array of distinct numbers sorted in increasing order, but has been rotated counter-clockwise n number of times.
   Find the value of n. AKA find the index of the smallest value in the array. */
function findRotationCount(arrName) {
    //If the array hasn't been rotated at all, first value is smallest, last value is largest.
    //In fact, only case where last element > first element is case where array isn't rotated.
    if (arrName[0] < arrName[arrName.length - 1]) { return 0; }

    //Now, basically, we want to find the index of the smallest value.
    let leftIndex = 0;
    let rightIndex = arrName.length - 1;
    //At the end, we want leftIndex to be the index of the largest number, rightIndex to be index of the smallest number.
    // Must keep going until indexes are off by at most 1.
    while (rightIndex - leftIndex > 1) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arrName[middleIndex] > arrName[0]) { leftIndex = middleIndex; }
        else { rightIndex = middleIndex; }
    }
    return rightIndex;
}

console.log("Find rotation count:");
console.log("Test case 1 (expected 2): " + findRotationCount([15, 18, 2, 3, 6, 12]));
console.log("Test case 2 (expected 4): " + findRotationCount([7, 9, 11, 12, 5]));
console.log("Test case 3 (expected 0): " + findRotationCount([7, 9, 11, 12, 15]));

/*
expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2)
    expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4)
    expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0)
*/