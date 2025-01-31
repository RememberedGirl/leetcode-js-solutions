/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const output = []

    arr.forEach((elem, i) => {
        if (fn(elem,i)) {
            output.push(elem)
        }
    })
};


const
    arr = [0,10,20,30],
    fn = function greaterThan10(n) { return n > 10; }

// Additional setup for browser testing
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (arr, fn) => {
        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`

        const result = filter(arr, fn)
        div.textContent = `arr: ${JSON.stringify(arr)}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        output.appendChild(div);
    };

    displayResult(arr, fn); //[20,30]
    displayResult([1,2,3], (n, i) => { return i === 0; }); //[1]
    displayResult([-2,-1,0,1,2], (n) => { return n + 1 }); //[-2,0,1,2]
}
