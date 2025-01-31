/**
 * This function implements a reducer without using Array.reduce method.
 * @param {number[]} nums - The array of numbers to process.
 * @param {Function} fn - The reducer function.
 * @param {number} init - The initial value.
 * @return {number} - The final accumulated value.
 */
function reduce(nums, fn, init) {
    let val = init; // Initialize val with the initial value

    // Iterate through each number in the nums array
    for (let num of nums) {
        val = fn(val, num); // Update val by applying the reducer function
    }

    return val; // Return the final accumulated value
}

/**
 * Example usage:
 */
const nums = [1, 2, 3, 4];
const sum = (accum, curr) => accum + curr;

console.log(reduce(nums, sum, 0)); // Output: 10


// Additional setup for browser testing
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (nums, fn) => {
        const div = document.createElement('div');
        div.textContent = `nums: ${JSON.stringify(nums)}, fn: ${fn} -> ${reduce(nums, sum, 0)} `;
        output.appendChild(div);
    };

    displayResult(nums, sum);
    displayResult([1, 2, 3, 4, -5], sum);
}
