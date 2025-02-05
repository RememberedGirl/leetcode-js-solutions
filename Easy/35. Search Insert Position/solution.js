
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {


    let l= 0, r = nums.length - 1
    let i

    while (l <= r){
        i = Math.floor((l+r) / 2)

        if (nums[i] < target){
            l = i + 1
        } else if (nums[i] > target) {
            r = i - 1
        } else {
            return i
        }

    }
    return l

};


console.log()
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (nums, target) => {
        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        // Array.from(
        //     { length: n },
        //     (_, index) => index
        // );

        const ret = searchInsert(nums, target)
        div.textContent = `nums: ${JSON.stringify(nums)}, target: ${target} -> ${ret}`
        output.appendChild(div);
    };

    displayResult([1,3,5,6,7,8,8,9,10,11,12,13,], 5);
    displayResult([1,3,5,6,7], 2);
    displayResult([1,3,5,6], 7);
    displayResult([1,3,5,6], -7);

}
