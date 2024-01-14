/* Accepts a rotated array of distinct sorted numbers and an integer. The function should return the index of num in the array.
    If the value is not found, return -1. */
function findRotatedIndex(arrName, target) {
    if (arrName.length === 0) { return -1; }
    let firstValue = arrName[0];
    if (firstValue === target) { return 0; }

    let leftIndex = 0;
    let rightIndex = arrName.length - 1;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arrName[middleIndex] === target) { return middleIndex; }

        //Now, how firstValue compares to the target value determines which values we can eliminate during each iteration of this loop.
        if (firstValue < target) {
            // 3 cases: 
            // 1. Value at middleIndex is greater than target (after target but before reset)
            // 2. Value at middleIndex is less than target AND <= firstValue (after target and after reset)
            // 3. Value at middleIndex is less than target BUT greater than firstValue (before target)
            if (arrName[middleIndex] > target) { rightIndex = middleIndex - 1; }
            else if (arrName[middleIndex] < target && arrName[middleIndex] <= firstValue) { rightIndex = middleIndex - 1; }
            else { leftIndex = middleIndex + 1; }
        }
        else { //firstValue is greater than target.
            // 3 cases:
            // 1. Value at middleIndex is >= than firstValue (and thus greater than target, before target and before reset).
            // 2. Value at middleIndex is less than firstValue AND less than target (before target and after reset).
            // 3. Value at middleIndex is less than firstValue AND greater than target (after target).
            if (arrName[middleIndex] >= firstValue) { leftIndex = middleIndex + 1; }
            else if (arrName[middleIndex] < firstValue && arrName[middleIndex] < target) { leftIndex = middleIndex + 1; }
            else { rightIndex = middleIndex - 1; }
        }
    }
    return -1;
}

console.log("Find rotated index:");
console.log("Test case 1 (expected 1): " + findRotatedIndex([3, 4, 1, 2], 4));
console.log("Test case 2 (expected 2): " + findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8));
console.log("Test case 3 (expected 6): " + findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3));
console.log("Test case 4 (expected -1): " + findRotatedIndex([37, 44, 66, 102, 10, 22], 14));
console.log("Test case 5 (expected -1): " + findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12));

/*
expect(findRotatedIndex([3, 4, 1, 2], 4)).toBe(1)
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toBe(2)
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toBe(6)
    expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)).toBe(-1)
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toBe(-1)
*/