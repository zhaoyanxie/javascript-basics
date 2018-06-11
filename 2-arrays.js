const assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns the sum of an array
function sum(array) {
    return array.reduce((a,b) => a + b);
}

// Assertions (do not change)
assertEquals(sum([1, 2]), 3);
assertEquals(sum([1, 2, 3, 4]), 10);

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function that returns an array of even numbers
function evenNumbersOnly(array) {
    return array.filter(num => num % 2 === 0);
}

// Assertions (do not change)
assertEquals(evenNumbersOnly([1, 2, 3, 4]), [2, 4]);
assertEquals(evenNumbersOnly([10, 11, 12]), [10, 12]);

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function that returns the sum of even numbers in the array
// hint: reuse the 2 functions that you defined earlier.
function sumEvenNumbers(array) {
    return sum(evenNumbersOnly(array));
}

// Assertions (do not change)
assertEquals(sumEvenNumbers([1, 2, 3, 4]), 6);
assertEquals(sumEvenNumbers([10, 11, 12]), 22);

/* ---------------------- BONUS: EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. the returned array should be sorted in ascending order (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function sortedUnion(arr1, arr2) {
    let mergedArr = arr1.concat(arr2);
    let returnArr = [];
    mergedArr = mergedArr.sort((a, b) => a - b);
    mergedArr.forEach((element, index, arr) => {
        if (index > 0) {
            if (element !== arr[index - 1]) {
                returnArr.push(element);
            }
        } else {
            returnArr.push(element);
        }
    });
    return returnArr;
}

// Assertions (do not change)
assertEquals(sortedUnion([1], [2]), [1, 2]);
assertEquals(sortedUnion([1, 3], [2]), [1, 2, 3]);
assertEquals(sortedUnion([1, 3], [11, 2]), [1, 2, 3, 11]);
assertEquals(sortedUnion([1, 3, 2, 2], [11, 2]), [1, 2, 3, 11]);
