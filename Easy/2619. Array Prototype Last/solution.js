// Solution for LeetCode Problem 2619: Array Prototype Last
// Enhance all arrays to include the last() method that returns the last element or -1 if the array is empty.

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    return this.length > 0 ? this[this.length - 1] : -1;
};

// Example usage:
const arr1 = [null, {}, 3];
console.log(arr1.last()); // Output: 3

const arr2 = [];
console.log(arr2.last()); // Output: -1

// Additional setup for browser testing
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (arr, description) => {
        const result = arr.last();
        const div = document.createElement('div');
        div.textContent = `${description}: ${JSON.stringify(arr)} -> ${result}`;
        output.appendChild(div);
    };

    displayResult([null, {}, 3], 'Example 1');
    displayResult([], 'Example 2');
}
