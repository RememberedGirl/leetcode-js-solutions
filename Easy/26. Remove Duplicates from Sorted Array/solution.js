
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 0;

    for (let i = 1; i < nums.length; i++){
        if (nums[j] !== nums[i]){
            nums[j += 1] =  nums[i]
        }
    }

    return j+1
};

console.log(removeDuplicates([1,1,2]))

console.log()
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (nums) => {
        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        // Array.from(
        //     { length: n },
        //     (_, index) => index
        // );


        const ret = removeDuplicates(nums)
        div.textContent = `nums: ${JSON.stringify(nums)} -> n: ${ret}, ${JSON.stringify(nums)}`
        output.appendChild(div);
    };

    displayResult([1,1,2]);
    displayResult([0,0,1,1,1,2,2,3,3,4]);

}
