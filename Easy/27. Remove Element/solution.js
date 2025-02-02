
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let j = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== val){
            nums[j++] =  nums[i]
        }
    }

    return j
};



console.log()
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (nums,val) => {
        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        // Array.from(
        //     { length: n },
        //     (_, index) => index
        // );


        const numsStr = JSON.stringify(nums)
        const ret = removeElement(nums,val)
        div.textContent = `nums: ${numsStr} -> n: ${ret}, ${JSON.stringify(nums)}`
        output.appendChild(div);
    };

    displayResult([1,1,2],1);
    displayResult([0,0,1,1,1,2,2,3,3,4],1);

}
