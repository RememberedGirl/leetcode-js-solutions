/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {

    let match = {}

    for (let i = 0; i<nums.length; i++ ){
        const elem = nums[i]

        if (elem in match) {
            return [match[elem], i]

        } else {
            match[target - elem] = i
        }
    }


};


// Additional setup for browser testing
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (nums, target) => {
        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        // Array.from(
        //     { length: n },
        //     (_, index) => index
        // );

        div.textContent = `nums: ${JSON.stringify(nums)}, target: ${target} -> ${JSON.stringify(twoSum(nums, target))}`
        output.appendChild(div);
    };

    displayResult([2,7,11,15],9);
    displayResult([-1,-2,-3,-4,-5], -8);
}
