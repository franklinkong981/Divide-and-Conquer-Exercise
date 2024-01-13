function countZeroes(array_name) {
    /* Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which 
    returns the number of zeroes in the array. */
    if (array_name.length === 0) return 0; //If array is empty, there are no 0s.
    if (array_name[array_name.length - 1] === 1) return 0; //If last value in array is 1, there are no 0s.
    if (array_name[0] === 0) return array_name.length; //If first value in array is 0, then every value is a 0.

    //If we reach this point, there are both 1s and 0s in the array. Now we just find the index of the first 0.
    let leftIndex = 0;
    let rightIndex = array_name.length - 1;
    while (rightIndex - leftIndex > 1)
}

console.log("Test case 1 (expected 2): " + countZeroes([1, 1, 1, 1, 0, 0]));
console.log("Test case 2 (expected 4): " + countZeroes([1, 0, 0, 0, 0]));
console.log("Test case 3 (expected 3): " + countZeroes([0, 0, 0]));
console.log("Test case 4 (expected 0): " + countZeroes([1, 1, 1, 1]));

/*
expect(countZeroes([1, 1, 1, 1, 0, 0])).toBe(2)
    expect(countZeroes([1, 0, 0, 0, 0])).toBe(4)
    expect(countZeroes([0, 0, 0])).toBe(3)
    expect(countZeroes([1, 1, 1, 1])).toBe(0)
*/