/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    else if (x < 10) return true;
    else if (x % 10 === 0) return false;

    let reversedHalf = 0;

    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return x === reversedHalf || x === Math.floor(reversedHalf / 10)
};


// Additional setup for browser testing
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (x) => {
        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        // Array.from(
        //     { length: n },
        //     (_, index) => index
        // );

        div.textContent = `x: ${x} -> ${isPalindrome(x)}`
        output.appendChild(div);
    };

    displayResult(12321);
    displayResult(1221);
}
