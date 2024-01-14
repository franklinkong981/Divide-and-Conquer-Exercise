/* Given a sorted array and a number, count the number of occurrences of the number in the array. */
function sortedFrequency(arrayName, target) {
    if (arrayName.length === 0) { return -1; }

    //Need to find 2 indexes: Indexes of the first occurrence and last occurrence of the target (if any).
    let leftIndex = 0;
    let rightIndex = arrayName.length - 1;
    let firstIndex, lastIndex;

    //First, find index of first occurrence. In the end, we want leftIndex to be index before first occurrence of target and
    //rightIndex to be index of first occurrence of target.
    if (arrayName[0] === target) { firstIndex = 0; }
    else {
        while (rightIndex - leftIndex > 1) {
            let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
            if (arrayName[middleIndex] < target) { leftIndex = middleIndex; }
            else if (arrayName[middleIndex] > target) { rightIndex = middleIndex - 1; }
            else { rightIndex = middleIndex; }
        } 
    
        if (arrayName[leftIndex] !== target && arrayName[rightIndex] !== target) { return -1; }
        else { firstIndex = rightIndex; } 
    }

    //Now, find the index of the last occurrence. In the end, we want leftIndex to be index of last occurrence of target and
    //rightIndex to be index of index right after that.
    leftIndex = firstIndex;
    rightIndex = arrayName.length - 1;
    
    if (arrayName[rightIndex] === target) { lastIndex = rightIndex; }
    else {
        while (rightIndex - leftIndex > 1) {
            let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
            if (arrayName[middleIndex] > target) { rightIndex = middleIndex; }
            else { leftIndex = middleIndex; }
        }

        lastIndex = leftIndex;
    }

    return lastIndex - firstIndex + 1;
    
}

console.log("Test case 1 (expected 4): " + sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2));
console.log("Test case 2 (expected 1): " + sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3));
console.log("Test case 3 (expected 2): " + sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1));
console.log("Test case 4 (expected -1): " + sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4));

/*
expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toBe(4)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toBe(1)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toBe(2)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toBe(-1)
*/