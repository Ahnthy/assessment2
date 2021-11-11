/* 1. Build an array */
let numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20]


/* 2. Sort the array in ascending order */
numbers.sort (

    // Compare two values and sort them according to the return value
    function (x, y) {
        return x - y // If x - y < 0, x is sorted before y. If x - y > 0, y is sorted before x.
    }
);
console.log (numbers);

/* 3. Insert three numbers 19, 23, 30 and keep the new array sorted in ascending order */
// Insert new elements between index 0 and 1
numbers.splice (0, 0, 19, 23, 30);

// Sort the new array again in ascending order
numbers.sort (
    function (x, y) {
        return x - y
    }
)
console.log (numbers);


/* 4. Remove two numbers 8, 31 and keep the new array sorted in ascending order */
// Delete an existing element by index
numbers.splice (numbers.indexOf (8), 1);
numbers.splice (numbers.indexOf (31), 1);
console.log (numbers);


/* 5. Create a function called “sequentialSearch” */
function sequentialSearch (array, targetValue) {
    
    // Init the index to a invalid value
    let index = -1;

    // For each element in array, compare the value with the targetValue
    for (let i = 0; i < array.length; i++) {

        // If element equals to the targetValue, return True and end the loop
        if (array[i] == targetValue) {
            index = i;
            break;
        }
    }
    return index;
}


/* 6. Create a JavaScript function called “binarySearch” */
// Make sure if the array sorted in ascending order before binarySearch
function binarySearch (array, targetValue) {

    // Init the index to a invalid value
    let index = -1;

    // Init the start and end points
    let start = 0, end = array.length - 1;

    // Iterate while start not meets end
    while (start <= end) {

        // Find the mid index
        let mid = Math.floor ((start + end) / 2);

        // If element is present at mid, return True
        if (array[mid] == targetValue) {
            index = mid;
            break;
        } else if (array[mid] > targetValue) { // Else look in left or right half accordingly
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return index;
}
