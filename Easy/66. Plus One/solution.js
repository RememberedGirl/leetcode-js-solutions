
/**
 * @param {string} s
 * @return {number}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {

        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }
    return [1, ...digits];
};


console.log()
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (digits) => {
        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        // Array.from(
        //     { length: n },
        //     (_, index) => index
        // );

        const digits_ = JSON.stringify(digits)
        const ret = plusOne(digits)
        div.textContent = `digits: ${digits_} ->${ret}`
        output.appendChild(div);
    };

    displayResult( [1,2,3]);
    displayResult( [9]);
    displayResult( [4,3,2,9]);

}
